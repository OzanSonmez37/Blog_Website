const express = require("express");
const router = express.Router();

router.post("/email", async (req, res) => {
  const outputHTML = `
    <h2>Mail Details</h2>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>`;

  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ozansonmez2004@gmail.com",
      pass: "ycunkurxnsnmbglf",
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  try {
    const info = await transporter.sendMail({
      from: '"Node Proje Contact Form" <ozansonmez2004@gmail.com>',
      to: "ozansonmez2004@gmail.com",
      subject: "Node Contact Message",
      text: "Hello world?",
      html: outputHTML,
    });

    console.log("Message sent:", info.messageId);

    req.session.sessionFlash = {
      type: "alert alert-success",
      message: "Mesajınız Başarıyla Gönderildi",
    };
    res.redirect('/contact');
  } catch (error) {
    console.error(error);
    req.session.sessionFlash = {
      type: "alert alert-danger",
      message: "Mesaj gönderilemedi!",
    };
    res.redirect('/contact');
  }
});

module.exports = router