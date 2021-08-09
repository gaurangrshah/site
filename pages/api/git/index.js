import {
  getRepo,
  getRepoContent,
  getRepoTree,
  getFile,
  getFileBySlug,
  getSeriesFolder,
  getAllPosts,
  getAllPosts2,
  getPostPaths,
} from '@/lib/octokit';

export default async function handler(req, res) {
  // const response = await getSeriesFolder('airtable-as-a-cms');
  const response = await getAllPosts();
  // const response = await getFileBySlug(
  //   // '10-vscode-extensions',
  //   // '/blog/10-vscode-extensions/10-vscode-extensions.md',
  //   'airtable-as-a-cms-3',
  //   'blog/airtable-as-a-cms/airtable-as-a-cms-3.md'
  // );

  // const response = await getRepoContent(
  //   'blog/airtable-as-a-cms/airtable-as-a-cms-2.md'
  // );
  if (!response) return res.status(500).json('Error');
  return res.json(response);
}
