const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "atevsl@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: "atevsl@meta.ua",
  };
  await transport
    .sendMail(email)
    .then(() => {
      console.log("email send sucess");
    })
    .catch((err) => console.log(err.message));
  return true;
};

module.exports = sendEmail;
