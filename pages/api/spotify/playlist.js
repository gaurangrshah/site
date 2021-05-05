import { getAccessToken } from "./authorize";

const USER_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/`;

export const getUserPlaylist = async (id) => {
  const { access_token } = await getAccessToken();

  return fetch(`${USER_PLAYLIST_ENDPOINT}${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async ({ query }, res) => {
  const response = await getUserPlaylist(query.id);
  return res.json({ data: await response.json() });
};
