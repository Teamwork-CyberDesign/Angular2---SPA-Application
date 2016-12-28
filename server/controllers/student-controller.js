"use strict";
module.exports = function (data) {
    return {
        findStudentByUser(req, res) {
            let userId = req.query.userId;
            return data.findStudentByUserId(userId)
                .then(student => {
                    res.json(JSON.stringify(student));
                })
                .catch(err => {
                    res.json(JSON.stringify(err));
                });
        },
        createStudent(req, res) {
            let firstName = req.body.user.firstName;
            let lastName = req.body.user.lastName;
            let username = req.body.user.username;
            let password = req.body.user.password;
            let email = req.body.user.email;
            return data.registerUser(firstName, lastName, username, password, email)
                .then((user) => {
                    return data.createStudent(user._id, user.username, 0);
                })
                .then(student => {
                    res.json(JSON.stringify(student));
                })
                .catch(err => {
                    res.json(JSON.stringify(err));
                });
        },
        findStudentByUsername(req, res) {
            let username = req.query.username;
            return data.findStudentByUsername(username)
                .then(teacher => {
                    res.json(JSON.stringify(teacher));
                })
                .catch(err => {
                    res.json(JSON.stringify(err));
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
                    res.json(JSON.stringify("Marks updated successfully!"));
                })
                .catch(err => {
                    res.json(JSON.stringify(err));
                });
        },
        getAllStudents(req, res) {
            return data.getAllStudents()
                .then(students => {
                    res.json(JSON.stringify(students));
                })
                .catch(err => {
                    res.json(JSON.stringify(err));
                });
        }
    };
};