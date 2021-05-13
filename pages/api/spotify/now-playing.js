import { getNowPlaying } from "@/lib/spotify";
// import { logger } from "@/sevices/logger";

export default async (_, res) => {
  try {
    const response = await getNowPlaying();
    console.log("🚀 ~ file: now-playing.js ~ line 7 ~ response", response);
    if (response.status > 200) {
      return res
        .status(404)
        .json({ error: "user has no active audio streams" });
    }
    const data = response.json ? await response.json() : response;
    // console.log("🚀 ~ file: now-playing.js ~ line 7 ~ data", data);
    return res.json(data);
  } catch (error) {
    console.log("🚀 ~ file: now-playing.js ~ line 11 ~ error", error);
    return res.status(204);
  }
};
