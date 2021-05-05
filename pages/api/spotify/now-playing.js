import { getAccessToken } from "./authorize";
import { logger } from "@/sevices/logger";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async (_, res) => {
  try {
    const response = await getNowPlaying();
    logger.response(response, '/now-playing');
    return res.json(response?.json ? await response.json() : response);
  } catch (error) {
    logger.error(error);
    return res.json(error);
  }
};
