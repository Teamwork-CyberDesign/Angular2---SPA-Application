"use strict";
const smtpTransport = require("../utils/smtp-transport");
const passport = require("passport");

module.exports = function (data) {
    return {
        viewAllUsers(req, res) {
            data.getAllUsers()
            .then(users => {
                console.log(users);
                res.json(JSON.stringify(users));
            });
        },
        viewUserByName(req, res) {
            data.findUserByUsername(req.params.name)
                .then(foundUsers => {
                    let user = foundUsers;
                    res.json(JSON.stringify(user));
                });
        },
        createUser(req, res) {
            let {
                firstName,
                lastName,
                username,
                password,
                email
            } = req.body;

            return data.registerUser(firstName, lastName, username, password, email)
                .then(user => {
                    return res.json(JSON.stringify(user));
                })
                .catch(err => {
                    // req.flash("errorMessage", err.message);
                    res.json(JSON.stringify(err));
                });
        },
        handleForgottenPassword(req, res) {
            data.updateUserToken(req.body.email)
                .then((user) => {
                    let mailOptions = {
                        to: user.email,
                        from: "project-tracker@abv.bg",
                        subject: "Project Tracker Password Reset",
                        text: `${"You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
                        "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
                        "http://"}${req.headers.host}/reset/${user.resetPasswordToken}\n\n` +
                        `If you did not request this, please ignore this email and your password will remain unchanged.\n`
                    };

                    return smtpTransport.sendMail(mailOptions);
                })
                .then((options) => {
                    // req.flash("successMessage", `An e-mail has been sent to ${options.to} with further instructions.`);
                    res.redirect("/");
                })
                .catch((error) => {
                    // req.flash("errorMessage", error.message);
                    res.redirect("/forgot");
                });
        },
        resetPassword(req, res) {
            let password = req.body.password;
            let token = req.body.token;

            data.changeUserPassword(password, token)
                .then(() => {
                    // req.flash("successMessage", "Your password has been successfully changed!");
                    res.redirect("/login");
                })
                .catch(err => {
                    // req.flash("errorMessage", err.message);
                    res.redirect("/");
                });
        },
        loginLocal(req, res, next) {
            const auth = passport.authenticate("local", (err, user) => {
                if (err) {
                    next(err);
                    return;
                }

                if (!user) {
                    // req.flash("errorMessage", "Invalid username or password!");
                    res.json(JSON.stringify(new Error("Invalid username or password!")));
                }

                req.login(user, error => {
                    if (error) {
                        next(error);
                        return;
                    }

                    // req.flash("successMessage", "You have logged in successfully!");
                    res.json(JSON.stringify({ username: user.username, token: req.sessionID}));
                    // res.redirect(req.session.returnTo || "/");
                    req.session.returnTo = null;
                });
            });

            auth(req, res, next);
        }
    };
};