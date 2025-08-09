require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = async (option) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const emailOptions = {
        from: `"Thiện Võ Trung" <${process.env.EMAIL_USERNAME}>`,
        to: option.email,
        subject: option.subject,
        text: option.message,
        html: option.html,
    };

    await transporter.sendMail(emailOptions);
};

module.exports = sendEmail;
