import { removeMethods } from "@/utils/obj-ops";
import Airtable from "airtable";

const base = new Airtable({
  // FIXME: for some reason apiKey is not being read from .env.local
  // tried using the NEXT_PUBLIC_ prefix, with no luck.
  apiKey: process.env.AIRTABLE_API_KEY, // hard-coded apiKey
}).base(process.env.AIRTABLE_USERS_BASE_ID);

const VIEW = "Grid view";

const verifySubscriber = async (email) => {
  const filterByFormula = `AND(email='${email}')`;
  const subscribers = await base("subscribers")
    .select({
      view: VIEW,
      filterByFormula,
    })
    .all();
  if (subscribers[0].fields?.verified) {
    return subscribers[0];
  } else {
    return { error: { message: "sorry try again", status: 404 } };
  }
};

export default async function handler(req, res) {
  const subscriber = await verifySubscriber(req?.query?.email);
  if (subscriber.error) {
    console.log(
      "🚀 ~ file: verified.js ~ line 30 ~ handler ~ subscriber.error",
      subscriber.error
    );
    return res.status(404).json({ error: { message: "user is not verified" } });
  } else {
    console.log(
      "🚀 ~ file: verified.js ~ line 33 ~ handler ~ r",
      "subscribed already -- success"
    );
    return res.status(200).json({ success: { message: "success" } });
  }
}
