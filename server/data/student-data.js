/* globals require module Promise */
"use strict";

module.exports = function (models) {
    let { Student } = models;

    return {
        createStudent(user, username, classNumber, egn, marks = []) {
            let student = new Student({
                user,
                username,
                classNumber,
                egn,
                marks
            });

            return new Promise((resolve, reject) => {
                student.save((err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(student);
                });
            });
        },
        findStudentByUserId(user) {
            return new Promise((resolve, reject) => {
                Student.findOne({ user })
                    .populate("user")
                    .exec((err, cl) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(cl);
                    });
            });
        },
        findStudentByUsername(username) {
            let query = { "username": new RegExp(username, "i") };
            return new Promise((resolve, reject) => {
                Student.findOne(query)
                    .populate("user")
                    .exec((err, cl) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(cl);
                    });
            });
        },
        findStudentById(id) {
            return new Promise((resolve, reject) => {
                Student.findById(id)
                    .populate("user")
                    .exec((err, user) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(user);
                    });
            });
        },
        addMarkToStudent(username, subject, mark) {
            return this.findStudentByUsername(username)
                .then(student => {
                    let subjectMarks = student.marks.filter(markInfo => markInfo.subject.toLowerCase() === subject.toLowerCase());

                    if (subjectMarks.length < 1) {
                        student.marks.push({ subject, marks: [] });
                        student.marks[student.marks.length - 1].marks.push(mark);
                    }
                    else {
                        subjectMarks[0].marks.push(mark);
                    }

                    student.save();
                })
        }
    };
};