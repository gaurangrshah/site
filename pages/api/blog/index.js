import { devApi } from "@/lib/dev-to";

export default async function handler(req, res) {
  // @SCOPE:  get published articles from dev.to my username

  const response = await devApi.getArticles({ username: "gsdev", page: 1 });
  console.log("🚀 ~ file: index.js ~ line 7 ~ handler ~ response", response);

  if (response?.length) return res.json(response);

  return res.json({ error: { message: "An unknown error has occured." } });
}
