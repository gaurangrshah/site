import {
  getRepo,
  getRepoContent,
  getRepoTree,
  getFile,
  getFileBySlug,
  getSeriesFolder,
  getAllPosts,
  getPostPaths,
} from '@/lib/octokit';

export default async function handler(req, res) {
  const response = await getSeriesFolder('airtable-as-a-cms');
  // const response = await getAllPosts();
  if (!response) return res.status(500).json('Error');
  return res.json(response);
}
