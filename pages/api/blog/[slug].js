import { devApi } from "@/lib/dev-to";

export default async function handler(req, res) {
  // @SCOPE:  set authToken cookie to request object
  return res.json({ post: await devApi.getArticleBySlug(req.query.slug) });
}
