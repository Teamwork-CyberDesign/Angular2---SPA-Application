/* globals require module Promise */
"use strict";

module.exports = function (models) {
    let { Student } = models;

    return {
        createStudent(user, username, classNumber, marks = []) {
            let student = new Student({
                user,
                username,
                classNumber,
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
                    .populate("user", "-password -salt")
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
                    .populate("user", "-password -salt")
                    .exec((err, cl) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(cl);
                    });
            });
        },
        searchStudents(username) {
            let query = { "username": new RegExp(username, "i") };
            return new Promise((resolve, reject) => {
                Student.find(query)
                    .populate("user", "-password -salt")
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
                    .populate("user", "-password -salt")
                    .exec((err, user) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(user);
                    });
            });
        },
        addMarkToStudent(username, subject, marks) {
            if(!Array.isArray(marks)) {
                marks = [...marks];
            }

            return this.findStudentByUsername(username)
                .then(student => {
                    let subjectMarks = student.marks.filter(markInfo => markInfo.subject.toLowerCase() === subject.toLowerCase());

                    if (subjectMarks.length < 1) {
                        student.marks.push({ subject, marks: [] });
                        student.marks[student.marks.length - 1].marks = marks;
                    }
                    else {
                        subjectMarks[0].marks = marks;
                    }

                    student.save();
                })
        },
        getAllStudents() {
            return new Promise((resolve, reject) => {
                Student.find({})
                    .populate("user", "-password -salt")
                    .exec((err, user) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(user);
                    });
            });
        }
    };
};