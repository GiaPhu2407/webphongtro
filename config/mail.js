require("dotenv/config");

module.exports = {
    MAILER: process.env.MAIL_MAILER,
    HOST: process.env.MAIL_HOST, // Sửa từ MAILER_HOST thành MAIL_HOST
    POST: process.env.MAIL_POST, // Sửa từ MAILER_POST thành MAIL_POST
    USERNAME: process.env.MAIL_USERNAME,
    PASSWORD: process.env.MAIL_PASSWORD,
    ENCRYPTION: process.env.MAIL_ENCRYPTION,
    FROM_ADDRESS: process.env.MAIL_FROM_ADDRESS,
    FROM_NAME: process.env.MAIL_FROM_NAME
}
