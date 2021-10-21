export default async function handler(req, res) {
  // @SCOPE:  set authToken cookie to request object
  console.log(req.headers);
  return res.json({headers: req.headers});
}
