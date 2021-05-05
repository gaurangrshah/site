import { getTrackFeatures } from "@/lib/spotify";

export default async (_, res) => {
  const response = await getTrackFeatures();
  console.log("response");
  return res.json({ data: await response.json() });
};
