import querystring from "querystring";
import { mergeObjectsByIndex } from "@/utils/array-ops";
import { logger } from "@/sevices/logger";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const USER_PLAYLIST_TRACKS_ENDPOINT = `https://api.spotify.com/v1/playlists/`;

export const getUserPlaylistTracks = async (id) => {
  const { access_token } = await getAccessToken();

  return fetch(`${USER_PLAYLIST_TRACKS_ENDPOINT}${id}/tracks`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const TRACK_ENDPOINT = `https://api.spotify.com/v1/tracks/`;

export const getTrack = async (id) => {
  const { access_token } = await getAccessToken();

  return fetch(`${TRACK_ENDPOINT}${id || "4IBN6z2HF2qizx5RpRar0v"}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const TRACK_FEATURES_ENDPOINT = `https://api.spotify.com/v1/audio-features/`;

export const getTrackFeatures = async (id) => {
  const { access_token } = await getAccessToken();

  return fetch(`${TRACK_FEATURES_ENDPOINT}${id || "4IBN6z2HF2qizx5RpRar0v"}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const TRACK_ANALYSIS_ENDPOINT = `https://api.spotify.com/v1/audio-analysis/`;

export const getTrackAnalysis = async (id) => {
  const { access_token } = await getAccessToken();

  return fetch(`${TRACK_ANALYSIS_ENDPOINT}${id || "4IBN6z2HF2qizx5RpRar0v"}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};


const USER_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/`;

export const getUserPlaylist = async (id) => {
  const { access_token } = await getAccessToken();

  return fetch(`${USER_PLAYLIST_ENDPOINT}${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};




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
      return data;
    } else throw new Error("we could not process your request");
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
