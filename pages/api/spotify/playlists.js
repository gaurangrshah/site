import { getAccessToken, getUserPlaylists } from "@/lib/spotify";



export default async ({ query }, res) => {
  const q = `?offset=${query?.offset || 0}&limit=${query?.limit || 50}`;
  const response = await getUserPlaylists(q);
  return res.json(response?.json ? await response.json() : response);
};
