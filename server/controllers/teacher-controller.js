"use strict";
module.exports = function (data) {
    return {
        findTeacherByUserId(req, res) {
            let userId = req.query.userId;
            return data.findTeacherByUserId(userId)
                .then(student => {
                    res.json(student);
                })
                .catch(err => {
                    res.json(err);
                });
        },
        findTeacherByUsername(req, res) {
            let username = req.params.username;
            return data.findTeacherByUsername(username)
                .then(teacher => {
                    res.json(teacher);
                })
                .catch(err => {
                    res.json(err);
                });
        },
        createTeacher(req, res) {
            let {
                username,
                classes,
                subject
            } = req.body;

            return data.createTeacher(username, subject, classes)
                .then(teacher => {
                    res.json(teacher);
                })
                .catch(err => {
                    res.json(err);
                });
        },
        getAllTeachers(req, res) {
            return data.getAllTeachers()
                .then(teachers => {
                    res.json(teachers);
                })
                .catch(err => {
                    res.json(err);
                });
        },
        searchTeachers(req, res) {
            let user = req.query.user;
            if (user) {
                return data.searchTeachers(user)
                    .then(teachers => {
                        res.json(teachers);
                    })
                    .catch(err => {
                        res.json(err);
                    });
            } else {
                return data.getAllTeachers()
                    .then(students => {
                        res.json(students);
                    })
                    .catch(err => {
                        res.json(err);
                    });
            }
        },
        addClassesToTeacher(req, res) {
            let {
                classes,
                username
            } = req.body;

            return data.addClassesToTeacher(username, classes)
                .then(teacher => {
                    res.json(teacher);
                })
                .catch(err => {
                    res.json(err);
                })
        }
    };
};