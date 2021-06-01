const axios = require("axios");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  port: process.env.MAILER_PORT,
  secure: true, // use TLS
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASSWORD,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

const headers = {
  "Access-Control-Allow-Origin": "http://localhost:5000",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

module.exports.handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "{}" };
  }

  const {
    email,
    name,
    subject = "No Subject",
    message,
    subscribe,
  } = JSON.parse(event.body);

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Email is required" }),
    };
  }
  if (!message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "The message can not be empty" }),
    };
  }
  try {
    const mail = {
      from: process.env.MAILER_FROM_EMAIL, // listed in rfc822 message header
      to: process.env.MAILER_TO_EMAIL, // listed in rfc822 message header
      replyTo: email,
      envelope: {
        from: email, // used as MAIL FROM: address for SMTP
        to: process.env.MAILER_TO_EMAIL, // used as RCPT TO: address for SMTP
      },
      subject: `${subject} [from Echoic.space]`,
      text: message,
    };

    const response = await transporter.sendMail(mail);
    console.log("Email sent");
    if (subscribe) {
      await axios
        .post("https://echoic.space/.netlify/functions/mailing-list", {
          email_address: email,
        })
        .then(() => {
          console.log("Subscribed to mailing list form contact form", email);
        })
        .catch((err) => {
          // do nothing
          console.error(
            "Could not subscribe to mailing list form contact form",
            email,
            err.response.data
          );
        });
    }
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Email sent" }),
    };
  } catch (error) {
    console.error("Could not send email", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Could not send email, please try again later",
      }),
    };
  }
};
