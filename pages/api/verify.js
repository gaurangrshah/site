import Cors from "cors";
import initMiddleware from "@/lib/init-middleware";

import Airtable from "airtable";

const base = new Airtable({
  // FIXME: for some reason apiKey is not being read from .env.local
  // tried using the NEXT_PUBLIC_ prefix, with no luck.
  apiKey: process.env.AIRTABLE_API_KEY, // hard-coded apiKey
}).base(process.env.AIRTABLE_USERS_BASE_ID);

const VIEW = "Grid view";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with  POST and OPTIONS
    methods: ["POST", "OPTIONS"],
  })
);

const verifyEmail = async (email) => {
  const filterByFormula = `AND(email='${email}')`;
  const users = await base("subscribers")
    .select({
      view: VIEW,
      filterByFormula,
    })
    .all();

  if (users.length && users[0]?.id) {
    const today = new Date(Date.now());
    const user = await base("subscribers").update([
      {
        id: users[0]?.id,
        fields: {
          verified: today.toISOString(),
        },
      },
    ]);

    return user;
  } else {
    return { error: { message: "sorry try again", status: 404 } };
  }
};

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/verified?email=${req?.query?.email}`
  );
  if (response.status === 404) {
    const isSubscribed = await response.json();

    if (isSubscribed.error) {
      const verified = await verifyEmail(req?.query?.email);
      if (verified.length && verified[0]?.id) {
        console.log("verified", true);
        return res.redirect(
          `/?success="Congratulations you are now subscribed"`
        );
      } else {
        console.log("an error occured");
        return res.redirect(`/?error="Sorry we could not verify your email"`);
      }
    }
  } else if (response.status === 200) {
    return res.redirect(
      `/?success="Thank you for your enthusiasm, you are already registered"`
    );
  }
}
