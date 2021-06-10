import { devApi } from "@/lib/dev-to";

export default async function handler(req, res) {
  // @SCOPE:  get published article by slug from dev.to my username using req.query.slug
  const response = await devApi.getArticleBySlug(req.query.slug);
  return res.json(response);
}
