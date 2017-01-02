"use strict";
const fs = require("fs"),
    path = require("path"),
    roles = require("../config/roles");

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    req.session.returnTo = req.path;
    res.status(401).json({ errmsg: "You must be logged in to do that!" })
}

module.exports = function (server, controller) {
    fs.readdirSync(__dirname)
        .filter(fileName => fileName.indexOf("-router") !== -1)
        .forEach((routerName) => {
            const router = require(path.join(__dirname, `/${routerName}`));
            router(server, controller, isAuthenticated, roles);
        });
};