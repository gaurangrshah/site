import Airtable from "airtable";

import { removeMethods } from "@/utils/obj-ops";
import { isValidJson } from "@/utils/is-valid-json";

const base = new Airtable({
  // FIXME: for some reason apiKey is not being read from .env.local
  // tried using the NEXT_PUBLIC_ prefix, with no luck.
  apiKey: process.env.AIRTABLE_API_KEY, // hard-coded apiKey
}).base(process.env.AIRTABLE_USERS_BASE_ID);

const VIEW = "Grid view";

const createSubscriber = async (email) => {
  return await base("subscribers").create({ email });
};

const findSubscriber = async (email) => {
  const filterByFormula = `AND(email='${email}')`;
  return await base("subscribers")
    .select({ view: VIEW, filterByFormula })
    .all();
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = isValidJson(req?.body)
      ? JSON.parse(req?.body).email
      : req?.body?.email;

    if (!email) {
      console.log("no email found");
      return res.status(404).json({ message: "no email found" });
    }
    const exists = await findSubscriber(email);
    if (!exists.length) {
      // console.log("found existing subscriber");
      const subscriber = await createSubscriber(email);
      // console.log("found existing subscriber II");
      if (subscriber.id) {
        // console.log("sending email to", email);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/email`,
          {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            credentials: "same-origin",
            body: JSON.stringify({ email: email }),
          }
        );
        const sent = await response.json();
        // console.log("🚀 ~ file: subscribe.js ~ line 58 email sent", sent);

        return res.json(removeMethods(sent));
      } else {
        // console.log("hit 404");
        return res
          .status(404)
          .json({ message: "no matching subscriber found" });
      }
    } else {
      // console.log("subscribed already");
      return res.status(200).json({ message: `you're already subscribed` });
    }
  } else {
    // console.log("hit 405");
    return res.status(405).json({});
  }
}
