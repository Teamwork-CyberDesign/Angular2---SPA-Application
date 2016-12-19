/* globals module require */
"use strict";
module.exports = (server, userController, isAuthenticated) => {
    server.post("/api/users", userController.createUser);
    server.post("/api/authenticate", userController.loginLocal);
};