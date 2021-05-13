import { getUserPlaylist } from "@/lib/spotify";

export default async ({ query }, res) => {
  const response = await getUserPlaylist(query.id);
  return res.json({ data: await response.json() });
};
