const session = require("express-session"),
    MongoDBStore = require("connect-mongodb-session")(session);


module.exports = (app, connectionString, appSecret) => {
    let sessionStorage = new MongoDBStore(
        {
            uri: connectionString,
            collection: "userSessions"
        });

    app.use(session({
        secret: appSecret,
        store: sessionStorage,
        resave: true,
        saveUninitialized: true
    }));
};