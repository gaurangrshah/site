/**
 * A simple method of demonstrating how you can use the Next.js
 * internal API for 'server-less' functions. We export an async function.
 *
 * We import the nodemailer package to handle SMTP transactional mail.
 *
 * In a production environment, you could create a .env.production
 * to hold your secure details, e.g.,
 * HOST, AUTH_USER, AUTH_PASS
 *
 */

// https://blog.mailtrap.io/nodemailer-gmail/#Configuring_a_Gmail_account
import nodemailer from "nodemailer";
import { isValidJson } from "@/utils/is-valid-json";

export default async (req, res) => {
  // console.log("🚀 ~ file: email.js ~ line 17 ~ req", req.body);
  const email = isValidJson(req?.body)
    ? JSON.parse(req?.body).email
    : req?.body?.email;
  if (!email)
    return res.status(404).json({ message: "no email provided to /email" });

  // let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: "gmail",
    auth: {
      user: "gaurang.r.shah@gmail.com", // generated ethereal user
      pass: process.env.EMAIL_PASS, // generated ethereal password
      // user: process.env.SMTP_USER, // generated ethereal user
      // pass: process.env.SMTP_PASS, // generated ethereal password
    },
  });

  if (req.method === "POST") {
    console.log("transporting");
    let info = await transporter.sendMail({
      from: '"G. Shah Dev" <gaurang.r.shah@gmail.com>', // sender address
      to: email, // comma-separated list of receivers
      subject: " ♻️  G. Shah Dev - Please Verify Your Email", // Subject line
      // text: JSON.stringify(req?.body, null, 2), // plain text body
      html: `<b>Thank you for subscribing!</b> <p>Please <a href="${process.env.NEXT_PUBLIC_API_URL}/verify?email=${email}" target="_blank">verify your email</a> </p>`, // html body
    });

    // console.log(info.messageId);

    res.json({
      message: `We've sent you a : ${email}`,
    });
  } else {
    res.status(200).json({ message: `Response from /api/emails.` });
  }
};
