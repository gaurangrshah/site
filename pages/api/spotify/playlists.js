import { getAccessToken } from "./authorize";

import { mergeObjectsByIndex } from "@/utils/array-ops";
import { logger } from "@/sevices/logger";

const SPOTIFY_USER = "gaarung";
const USER_PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/users/`;

const fetchPlaylists = async (options, q) => {
  return await fetch(
    `${USER_PLAYLISTS_ENDPOINT}${SPOTIFY_USER}/playlists${q}`,
    options
  );
};

const getAllPlaylists = async (options, q) => {
  // get all playlists that belong to user
  const playlists = [];
  try {
    const response = await fetchPlaylists(options, q);
    const data = response?.json ? await response.json() : response;
    if (data?.items?.length) {
      // playlists.push(data?.items);
      return data;
    } else throw new Error("we could not process your request");

    // if (data.next) {
    //   const response2 = await fetchPlaylists(
    //     options,
    //     `?offset=${data.offset}&limit=${data.limit}`
    //   );
    //   const data2 = response2.json ? await response2.json() : response;
    //   if (data2?.items?.length) {
    //     playlists.push(data2?.items);
    //   }
    // }
    // return playlists.flat();
  } catch (error) {
    return error;
  }
};

export const getUserPlaylists = async (q) => {
  const { access_token } = await getAccessToken();

  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  const response1 = await getAllPlaylists(options, q);

  logger.success(`response1: count:`, response1?.items?.length);

  // get all tracks for each playlist
  const response2 =
    response1?.items?.length &&
    (await Promise.all(
      await response1?.items?.map(async (playlist) => {
        const tracks = await fetch(playlist.tracks, options);
        return tracks.json();
      })
    ));

  if (response2?.length) {
    logger.success("response2 items count:", response2?.length);
  }
  const merged = mergeObjectsByIndex(response2, response1.items);
  return { data: merged, response: response1 };
};

export default async ({ query }, res) => {
  const q = `?offset=${query?.offset || 0}&limit=${query?.limit || 50}`;
  const response = await getUserPlaylists(q);
  return res.json(response?.json ? await response.json() : response);
};
