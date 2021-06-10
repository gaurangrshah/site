import { devApi } from "@/lib/dev-to";

export default async function handler(req, res) {
  // @SCOPE:  get published articles from dev.to my usernamereq.query.id
  console.log(
    "🚀 ~ file: [...id].js ~ line 10 ~ handler ~ req.query.id",
    req.query.id
  );
  const response = await devApi.getArticleById(req.query.id);

  return res.json({ response });
}
