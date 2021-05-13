import { getAccessToken } from "@/lib/spotify";
import { logger } from "@/sevices/logger";

export default async (_, res) => {
  const response = await getAccessToken();
  if (response.ok) logger.success("access token received");
  return res.json(response);
};
