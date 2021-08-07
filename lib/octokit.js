const { removeEmpties } = require('@/utils/obj-ops');

const { Octokit } = require('octokit');
const matter = require('gray-matter');

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_BLOG_REPO = process.env.GITHUB_BLOG_REPO;

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
  const blogDirContent = await octokit.rest.repos.getContent({
    mediaType: {
      format: 'raw',
    },
    owner: GITHUB_OWNER,
    repo: GITHUB_BLOG_REPO,
    path: path,
    ref: `main`, // branch name
  });

  return blogDirContent;
}

export function Folder(dir) {
  // @SCOPE: returns a folder object and strips all unused fields
  const folder = {
    name: dir?.name,
    path: dir?.path,
    sha: dir?.sha,
    type: dir?.type,
    // data: dir?.data,
    posts: dir?.posts.filter(Boolean),
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

export async function getFile(sha) {
  // @SCOPE: returns a file object given a single sha
  const { tree } = await getRepoTree();
  return tree.filter((file) => file?.sha === sha)[0];
}

export async function getPostPaths() {
  // @SCOPE: returns an array of all the paths of the posts
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
      // iterate over the article folder for each post
      folder.posts = await getRepoContent(folder?.path);

      // only keep the markdown posts
      folder.posts = folder?.posts?.data.filter((file) =>
        file?.name.includes('.md')
      );

      folder.posts = await Promise.all(
        folder.posts
          ?.map(async (post) => {
            // uses post.path from frontmatter in each directory index to get data for each post
            const { data } = await getRepoContent(post?.path);
            post.matter = matter(data); // add the frontmatter to each post

            post.matter.orig = ''; // remove the original markdown field

            return post?.matter?.data?.status === 'published' ? post : null;
          })
          .filter(Boolean)
      );

      // builds up folder obj and removes any folders with unpublished posts
      // instead we get an empty object for the folder
      return new Folder(folder);
    })
  );

  // if there were any unpublished posts, that folder will be an empty object here...
  // we filter thru and remove any empty objects.
  return folders.filter((folder) => Object.keys(folder).length);
}
