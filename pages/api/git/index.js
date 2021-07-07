import {
  getRepo,
  getRepoContent,
  getRepoTree,
  getFile,
  getAllPosts,
  getPostPaths,
} from "@/lib/octokit";

export default async function handler(req, res) {
  return res.json(await getAllPosts());
}
