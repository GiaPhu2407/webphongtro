const nodeMailer = require('nodemailer');
const mailConfig = require('../config/mail');
require('dotenv/config');

exports.sendEmail = (to, subject, htmlContent) => {
    const transport = nodeMailer.createTransport({
        host: mailConfig.HOST,
        port: mailConfig.POST,
        secure: false,
        auth: {
            user: mailConfig.USERNAME,
            pass: mailConfig.PASSWORD
        }
    });
    const options = {
        from: mailConfig.FROM_ADDRESS,
        to: to,
        subject: subject,
        html: htmlContent
    };
    return transport.sendMail(options);
};
