import { getTrack } from "@/lib/spotify";

export default async (_, res) => {
  const response = await getTrack();
  console.log("response");
  return res.json({ data: await response.json() });
};
