const Contact = require("../models/contact.model");
const nodemailer = require("nodemailer");

exports.create = async (email) => {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "1a70237424845f", //generated user mailtrap
        pass: "e5b5b5eee10928", // generated password mailtrap
      },
    });

    // setup email data with unicode symbols
    let mailOptions = { //change to variables (pull from req body)
      from: 'test@email.com', // sender address
      to: "testy913@gmail.com", // list of receivers
      subject: "Node Contact test", // Subject line
      text: "Hello world?", // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  } catch (error) {
    throw Error("contact.service.js -> Error creating contact " + error);
  }
};
