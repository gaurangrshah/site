import { devApi } from "@/lib/dev-to";

export default async function handler(req, res) {
  // @SCOPE:  get published article by slug from dev.to my username using req.query.slug
  const response = await devApi.getArticleBySlug(req.query.slug);
  if (response?.length) return res.json(response);

  return res.json({ error: { message: "An unknown error has occured." } });
}
