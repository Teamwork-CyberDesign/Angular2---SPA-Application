"use strict";
module.exports = function (data) {
    return {
        findTeacherByUserId(req, res) {
            let userId = req.query.userId;
            return data.findTeacherByUserId(userId)
                .then(student => {
                    res.json(JSON.stringify(student));
                })
                .catch(err => {
                    res.json(JSON.stringify(err));
                });
        },
        findTeacherByUsername(req, res) {
            let username = req.query.username;
            return data.findTeacherByUsername(username)
                .then(teacher => {
                    res.json(JSON.stringify(teacher));
                })
                .catch(err => {
                    res.json(JSON.stringify(err));
                });
        },
        createTeacher(req, res) {
            let {
                user,
                username,
                classes,
                subject
            } = req.body;

            return data.createTeacher(user, username, subject, classes)
                .then(teacher => {
                    res.json(JSON.stringify(teacher));
                })
                .catch(err => {
                    res.json(JSON.stringify(err));
                });
        }
    };
};