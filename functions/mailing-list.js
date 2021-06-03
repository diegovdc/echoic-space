const axios = require("axios");

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function isValidEmail(email) {
  return emailRegex.test(email);
}

module.exports.handler = async (event, context) => {
  let email_address, name;
  try {
    const body = JSON.parse(event.body);
    email_address = body.email_address;

    if (!email_address) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Email is required" }),
      };
    }

    await axios.post(
      `https://${process.env.MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
      {
        email_address,
        status: "pending",
        merge_fields: { FNAME: body.name || "" },
        language: body.language || "",
      },
      {
        auth: {
          username: process.env.MAILCHIMP_USERNAME,
          password: process.env.MAILCHIMP_PASSWORD,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Thanks for signing up!`,
      }),
    };
  } catch (error) {
    const message = !isValidEmail(email_address)
      ? "A valid email is required"
      : `An error occured, please try again later`;
    console.log(error);
    return { statusCode: 400, body: JSON.stringify({ message }) };
  }
};
