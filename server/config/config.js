/* eslint-disable no-process-env*/
let path = require("path");
let rootPath = path.normalize(path.join(__dirname, "../"));

module.exports = {
    development: {
        rootPath,
        db: {
            local: "mongodb://localhost/cyber-design",
            cloud: process.env.DB_CONNECTION
        },
        port: process.env.PORT || 3000
    },
    production: {
        rootPath,
        db: { cloud: process.env.DB_CONNECTION },
        port: process.env.PORT || 3000
    },
    mailOptions: {
        host: "in-v3.mailjet.com",
        port: 587,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    },
    appSecret: process.env.APP_SESSION_SECRET
};