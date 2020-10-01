const nodemailer = require('nodemailer')
const express = require('express');
require('dotenv').config()
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
//data parsing
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json());

app.get('/', (req, res) => res.send("Send emails with node.js"))

// POST route from contact form
app.post('/email', (req, res) => {

  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: 'danieldhoang93@gmail.com',
    subject: req.body.subject,
    text: `${req.body.email} \n ${req.body.message}`
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      console.log(error) // Show a page indicating failure
    }
    else {
      console.log("Email sent!") // Show a page indicating success
    }
  })
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});