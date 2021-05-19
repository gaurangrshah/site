import { sendEmail } from "@/lib/emailer";

import { isValidJson } from "@/utils/is-valid-json";

export default async function handler(req, res) {
  const email = isValidJson(req?.body)
    ? JSON.parse(req?.body).email
    : req?.body?.email;

  if (!email) {
    console.log("email.js -- no email found", req?.body);
    return res.status(404).json({ message: "no email provided to /email" });
  }

  const message = isValidJson(req?.body)
    ? JSON.parse(req?.body).message
    : req?.body?.message;

  if (!message) {
    console.log("email.js -- no message found", req?.body);
    return res.status(404).json({
      message:
        "sorry your request could not be completed, please email gaurang.r.shah@gmail.com directly if this problem persists.",
    });
  }

  const subject = isValidJson(req?.body)
    ? JSON.parse(req?.body).subject
    : req?.body?.subject;

  if (!subject) {
    console.log("email.js -- no subject found", req?.body);
    return res.status(404).json({
      message:
        "sorry your request could not be completed, please email gaurang.r.shah@gmail.com directly if this problem persists.",
    });
  }
  const recipients = isValidJson(req?.body)
    ? JSON.parse(req?.body).recipients
    : req?.body?.recipients;

  if (req.method === "POST") {
    console.log("transporting");
    let mailObj = {
      // @TODO: define outgoing email via appconfig
      from: `"G. Shah Dev" <${process.env.SMTP_USER}>`, // sender address
      recipients: recipients?.length ? recipients : [process.env.SMTP_USER], // comma-separated list of receivers
      subject: subject, // Subject line
      message: message,
    };

    await sendEmail(mailObj);
    console.log("email sent", JSON.stringify(mailObj));

    res.json({
      message: recipients?.length
        ? `We've sent a verfication email to: ${email}`
        : `Your message was sent successfully.`,
    });
  } else {
    res
      .status(200)
      .json({ message: `Response from /api/emails.`, error: true });
  }
}
