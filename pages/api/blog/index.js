import { devApi } from "@/lib/dev-to";

export default async function handler(req, res) {
  // @SCOPE:  get published articles from dev.to my username

  const response = await devApi.getArticles({ username: "gsdev", page: 1 });

  return res.json(response);
}
