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
            let firstName = req.body.student.user.firstName;
            let lastName = req.body.student.user.lastName;
            let username = req.body.student.user.username;
            let password = req.body.student.user.password;
            let email = req.body.student.user.email;
            let grade = req.body.grade;
            return data.registerUser(firstName, lastName, username, password, email)
                .then((user) => {
                    return data.createStudent(user._id, user.username, 0);
                })
                .then(student => {
                    return data.addStudentsToClass(student._id, grade);
                })
                .then(cl => {
                    res.json(JSON.stringify(cl));
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