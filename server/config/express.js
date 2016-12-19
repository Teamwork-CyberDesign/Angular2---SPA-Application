/* globals require */
"use strict";
let express = require("express"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    logger = require("morgan"),
    // flash = require("connect-flash-plus"),
    // roles = require("./roles"),
    // paginate = require("express-paginate"),
    path = require("path");

function initUtils(app, rootPath) {
    app.use("/", express.static(path.join(rootPath, "../dist")));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(logger("dev"));
}

function initErrorHandling(app) {
    app.use((req, res, next) => {
        let err = new Error("We can't seem to find the page you are looking for!");
        err.status = 404;
        next(err);
    });
    //
    // // CSRF token errors here
    // app.use((err, req, res, next) => {
    //     if (err.code !== "EBADCSRFTOKEN") {
    //         return next(err);
    //     }
    //     let message = "Your session has expired or form has been tampered with!";
    //     let error = new Error(message);
    //     res.status(403)
    //         .render("error", { error, message });
    // });
    //
    // // error handler
    // // eslint-disable-next-line
    app.use((err, req, res, next) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        if (req.app.get("env") === "development") {
            res.locals.error = err;
        } else {
            res.locals.error = {};
        }

        res.status(err.status || 500);

        res.json(JSON.stringify(err));
    });
}

function initAppComponents(app, connectionString) {
    require("./session")(app, connectionString);
    require("./passport")(app);

    const User = require("../models/user-model");
    const data = require("../data")({ User });
    const controllers = require("../controllers")(data);

    require("../routers")(app, controllers);
    require("./mongoose")(connectionString);
}
// eslint-disable-next-line
module.exports = (app, config) => {
    initUtils(app, config.rootPath);
    initAppComponents(app, config.db.local);
    initErrorHandling(app);


    // // Global Vars
    // app.use((req, res, next) => {
    //     res.locals.successMessage = req.flash("successMessage");
    //     res.locals.errorMessage = req.flash("errorMessage");
    //     res.locals.error = req.flash("error");
    //     next();
    // });
    //
    // app.use(csrf());
    // app.use((req, res, next) => {
    //     let token = req.csrfToken();
    //     res.cookie("XSRF-TOKEN", token);
    //     res.locals._csrf = token;
    //     next();
    // });
    //
    // // Paginate configuration
    // app.use(paginate.middleware(10, 50));
    //
    // app.all((req, res, next) => {
    //     // set default or minimum is 10 (as it was prior to v0.2.0)
    //     if (req.query.limit <= 10) {
    //         req.query.limit = 10;
    //     }
    //     next();
    // });
    //

};