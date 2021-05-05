import { getTrackAnalysis } from "@/lib/spotify";

export default async (_, res) => {
  const response = await getTrackAnalysis();
  console.log("response");
  return res.json({ data: await response.json() });
};
