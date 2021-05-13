import { getAccessToken } from "@/lib/spotify";

export default async ({ query }, res) => {
  const { access_token } = await getAccessToken();
  const options = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  const response = await fetch(decodeURIComponent(query?.url), options);
  // console.log("🚀 ~ file: fetcher.js ~ line 12 ~ response", response);
  return res.json({ data: await response.json() });
};
