const nodemailer = require('nodemailer');
const sendEmail = async (options) => {
  // 1) Create a transporter
  // const transporter = nodemailer.createTransport({
  //   host: process.env.EMAIL_HOST,
  //   port: process.env.EMAIL_PORT,
  //   auth: {
  //     user: process.env.EMAIL_USERNAME,
  //     post: process.env.EMAIL_PASSWORD,
  //   },
  // });
  var transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '647b69542c6250',
      pass: '37996d5c108b1f',
    },
  });
  // 2) Define the email option
  const mailOptions = {
    from: 'Pratik <pratik@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    //HTML
  };

  //3) Actually send the Email
  // try {
  await transporter.sendMail(mailOptions);
  // } catch (err) {
  //   console.log(err);
  // }
};

module.exports = sendEmail;

// const nodemailer = require('nodemailer');

// const sendEmail = async (options) => {
//   // 1) Create a transporter
//   var transport = nodemailer.createTransport({
//     host: 'smtp.mailtrap.io',
//     port: 2525,
//     auth: {
//       user: '647b69542c6250',
//       pass: '37996d5c108b1f',
//     },
//   });
//   // 2) Define the email options
//   const mailOptions = {
//     from: 'pratik <pratikkumar753@gmail.com>',
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//     // html:
//   };

//   // 3) Actually send the email
//   await transporter.sendMail(mailOptions);
// };

// module.exports = sendEmail;
