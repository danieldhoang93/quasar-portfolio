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

//POST emails
app.post('/email', (req, res) => {
    // Instantiate the SMTP server
    var transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }); 

    // Specify what the email will look like
    const mailOptions = {
        from: '', // This is ignored by Gmail
        to: req.body.email,
        cc: 'danieldhoang93@gmail.com',
        subject: req.body.subject,
        html: `<b>From: ${req.body.email}</b><p>${req.body.message}</p>`
    }

    // Attempt to send the email
    transport.sendMail(mailOptions, (error, response) => {
        if (error) {
            return console.log(error, mailOptions);
        }
        else {
            console.log('Message sent: %s', info.messageId,process.env.EMAIL,process.env.PASSWORD);
        }
    })
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});