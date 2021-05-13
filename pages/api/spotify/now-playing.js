import { getNowPlaying } from "@/lib/spotify";
// import { logger } from "@/sevices/logger";

export default async (_, res) => {
  try {
    const response = await getNowPlaying();
    const data = await response.json();
    // console.log("🚀 ~ file: now-playing.js ~ line 7 ~ data", data);
    return res.json(data);
  } catch (error) {
    console.log("🚀 ~ file: now-playing.js ~ line 11 ~ error", error);
    return res.json(error);
  }
};
