const { Octokit } = require("octokit");
const matter = require("gray-matter");

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_BLOG_REPO = process.env.GITHUB_BLOG_REPO;

export async function githubAuthenticate() {
  const response = await octokit.request("GET /user");

  console.log(`authenticated as ${response.data.login}`);
  return response;
}

export async function getRepo() {
  // @SCOPE: returns meta data about current repo
  const response = await octokit.rest.repos.get({
    owner: "gaurangrshah",
    repo: "md-cms",
  });

  return response?.data;
}

export async function getRepoContent(path = "/blog") {
  const blogDirContent = await octokit.rest.repos.getContent({
    mediaType: {
      format: "raw",
    },
    owner: GITHUB_OWNER,
    repo: GITHUB_BLOG_REPO,
    path: path,
    ref: `main`, // branch name
  });

  return blogDirContent;
}

export function Folder(dir) {
  return {
    name: dir?.name,
    path: dir?.path,
    sha: dir?.sha,
    type: dir?.type,
    // data: dir?.data,
    posts: dir?.posts,
  };
}

export async function getRepoTree(sha = "main") {
  const { data } = await octokit.request(
    "GET /repos/{owner}/{repo}/git/trees/{tree_sha}",
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
  const { tree } = await getRepoTree();
  return tree.filter((file) => file?.sha === sha)[0];
}

export async function getPostPaths() {
  let posts = await getAllPosts();

  const paths = posts?.map((post) => ({
    params: { slug: [post.name] },
  }));

  return paths;
}

export async function getAllPosts() {
  let { data: folders } = await getRepoContent();

  folders = await Promise.all(
    folders
      .map(async (folder) => {
        // iterate over the article folder for each post
        // // get corresponding data/content for each post
        folder.posts = await getRepoContent(folder?.path);

        // remove any posts that don't match the provided type
        folder.posts = folder?.posts?.data.filter((post) =>
          post?.name.includes(".md")
        );

        folder.posts = await Promise.all(
          folder.posts
            ?.map(async (post) => {
              const { data } = await getRepoContent(post?.path);
              post.matter = matter(data);

              post.matter.orig = "";
              if (post?.matter?.data?.status !== "published") return;

              return post;
            })
            .filter(Boolean)
        );
        return new Folder(folder);
      })
      // filter out any null or empty posts from the array
      .filter(Boolean)
  );

  // remove folders with no actual posts, (private/draft posts removal)
  return folders?.filter((folder) => folder?.posts[0]);
}
