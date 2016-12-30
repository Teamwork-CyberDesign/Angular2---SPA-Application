"use strict";
module.exports = function (data) {
    return {
        findStudentByUser(req, res) {
            let userId = req.query.userId;
            return data.findStudentByUserId(userId)
                .then(student => {
                    res.json(student);
                })
                .catch(err => {
                    res.json(err);
                });
        },
        createStudent(req, res) {
            let {
                firstName,
                lastName,
                username,
                password,
                email,
            } = req.body.user;

            let classNumber = req.body.classNumber;
            return data.registerUser(firstName, lastName, username, password, email)
                .then((user) => {
                    return data.createStudent(user._id, user.username, classNumber || 0);
                })
                .then(student => {
                    res.json(student);
                })
                .catch(err => {
                    res.json(err);
                });
        },
        findStudentByUsername(req, res) {
            let username = req.params.username;
            return data.findStudentByUsername(username)
                .then(student => {
                    res.json(student);
                })
                .catch(err => {
                    res.json(err);
                });
        },
        addMark(req, res) {
            let {
                username,
                subject,
                marks,
            } = req.body;

            return data.addMarkToStudent(username, subject, marks)
                .then(() => {
                    res.json({ message: "Marks updated successfully!" });
                })
                .catch(err => {
                    res.json(err);
                });
        },
        getAllStudents(req, res) {
            return data.getAllStudents()
                .then(students => {
                    res.json(students);
                })
                .catch(err => {
                    res.json(err);
                });
        },
        searchStudents(req, res) {
            let user = req.query.user;
            if (user) {
                return data.searchStudents(user)
                    .then(students => {
                        res.json(students);
                    })
                    .catch(err => {
                        res.json(err);
                    });
            } else {
                return data.getAllStudents()
                    .then(students => {
                        res.json(students);
                    })
                    .catch(err => {
                        res.json(err);
                    });
            }

        }
    };
};