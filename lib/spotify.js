import { getAccessToken } from "../pages/api/spotify/authorize";



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
