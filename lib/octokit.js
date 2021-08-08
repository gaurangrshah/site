const { removeEmpties } = require('@/utils/obj-ops');

const { Octokit } = require('octokit');
const matter = require('gray-matter');
const { typeIs } = require('../utils/validator');

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_BLOG_REPO = process.env.GITHUB_BLOG_REPO;

export function parseMarkdown(data) {
  if (!data) return data;
  if (!matter.test(data)) {
    console.log('no matter', data);
    return data;
  }
  const postMatter = matter(data);
  delete postMatter?.orig;
  delete postMatter?.headers;
  return postMatter;
}

export async function githubAuthenticate() {
  const response = await octokit.request('GET /user');

  console.log(`authenticated as ${response.data.login}`);
  return response;
}

export async function getRepo() {
  // @SCOPE: returns meta data about current repo
  const response = await octokit.rest.repos.get({
    owner: 'gaurangrshah',
    repo: 'md-cms',
  });

  return response?.data;
}

export async function getRepoContent(path = '/blog') {
  // @SCOPE: returns content of a the entire repo
  const folderOrFile = await octokit.rest.repos.getContent({
    mediaType: {
      format: 'raw',
    },
    owner: GITHUB_OWNER,
    repo: GITHUB_BLOG_REPO,
    path: path,
    ref: `main`, // branch name
  });

  // if folderOrFile is a string use matter to parse it
  if (typeIs(folderOrFile?.data, 'String')) {
    console.log(
      `🔵 String | parsing markdown ${typeIs(folderOrFile?.data)} : `,
      matter.test(folderOrFile?.data)
    );
    delete folderOrFile?.headers;
    folderOrFile.matter = parseMarkdown(folderOrFile?.data);
    delete folderOrFile?.data;
    delete folderOrFile?.matter?.content;
    return folderOrFile;
  }
  if (typeIs(folderOrFile?.data, 'Array')) {
    console.log(
      `🔴 Array| parsing markdown ${typeIs(folderOrFile?.data)} :`,
      matter.test(folderOrFile?.data)
    );

    return folderOrFile;
  }

  // if folderOrFile is an Array of files return it
  return folderOrFile;
}

export function Folder(dir) {
  // @SCOPE: returns a folder object and strips all unused fields
  const folder = {
    name: dir?.name,
    path: dir?.path,
    sha: dir?.sha,
    type: dir?.type,
    // data: dir?.data,
    posts: dir?.posts?.filter(Boolean),
    isSeries: dir?.posts?.length > 1,
  };

  folder.postCount = folder.posts?.length;

  // return only the folders with published posts
  if (folder.posts?.length) return folder;
  else return null;
}

export async function getRepoTree(sha = 'main') {
  // @SCOPE: returns a tree object of the repo
  const { data } = await octokit.request(
    'GET /repos/{owner}/{repo}/git/trees/{tree_sha}',
    {
      owner: GITHUB_OWNER,
      repo: GITHUB_BLOG_REPO,
      tree_sha: sha,
      // tree_sha: "/blog",
      recursive: true,
    }
  );

  return data;
}

export async function getFile(sha, dir = '/blog') {
  // @SCOPE: returns a file object given a single sha
  const { tree } = await getRepoTree(dir);
  return tree.filter((file) => file?.sha === sha)[0];
}

export async function getFileBySlug(slug, filePath) {
  filePath = filePath ? filePath : `/blog${slug}.md`;

  // @SCOPE: returns a file object given a single sha
  // const { tree } = await getRepoTree();
  // const file = tree.filter((file) => file?.path === path)[0];
  const post = await getRepoContent(filePath);
  delete post?.headers;

  if (post) {
    return { post, status: 200 };
  } else return { status: 404 };
}

export async function getSeriesFolder(slug) {
  // @SCOPE: returns a folder object given a single sha
  const path = `blog/${slug}`;
  const { data } = await getRepoContent(path);

  try {
    const posts = await Promise.all(
      data.map(async (file) => {
        if (file.type === 'dir' || file.name === 'images') return null;
        const fileName = file?.name?.split('.')[0];
        const { post } = await getFileBySlug(fileName, file?.path);
        if (!post) throw new Error(`${fileName} not found`);
        return post;
        // return post;
      })
    );

    // const folder = new Folder(matter(data));
    // console.log('🚀 | file: octokit.js | line 127 | posts', posts?.length);

    return posts;
  } catch (err) {
    console.error(err, 'something went wrong 😱');
  }
}

export async function getPostPaths() {
  // @SCOPE: returns an array of all the paths of the posts
  // used by getStaticPaths()
  let posts = await getAllPosts();

  const paths = posts?.map((post) => ({
    params: { slug: [post.name] },
  }));

  return paths;
}

export async function getAllPosts(isAdmin = false) {
  let { data: folders } = await getRepoContent();

  folders = await Promise.all(
    folders.map(async (folder) => {
      // console.log('🚀 | file: octokit.js | line 157 | folder', folder);
      // iterate over the article folder for each post
      folder.posts = await getRepoContent(folder?.path); // returns git details for each post folder
      console.log(
        '🚀 | file: octokit.js | line 160 | folder.posts',
        typeIs(folder.posts)
      );

      // only keep the markdown posts
      folder.posts = folder?.posts?.data.filter((file) =>
        file?.name.includes('.md')
      );

      folder.posts = await Promise.all(
        folder.posts
          ?.map(async (post) => {
            console.log('🚀 | file: octokit.js | line 169 | post', post?.path);
            // uses post.path from frontmatter in each directory index to get data for each post

            const slug = post?.name?.split('.')[0];
            console.log('🚀 | file: octokit.js | line 196 | slug', slug);
            const response = await getFile(slug, post?.path);
            post.matter = parseMarkdown(response?.data); // add the frontmatter to each post
            console.log('🚀 | file: octokit.js | line 196 | post', post);
            // post.matter.orig = ''; // remove the original markdown field

            return post?.matter?.data?.status === 'published' ? post : null;
          })
          .filter(Boolean)
      );

      // builds up folder obj and removes any folders with unpublished posts
      // instead we get an empty object for the folder

      // return new Folder(folder);
      return folder;
    })
  );

  // if there were any unpublished posts, that folder will be an empty object here...
  // we filter thru and remove any empty objects.
  return folders.filter((folder) => Object.keys(folder).length);
}
