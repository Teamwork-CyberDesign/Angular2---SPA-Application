/* globals require module Promise */
"use strict";

module.exports = function (models) {
    let { Class, Student } = models;

    return {
        createClass(grade, subjects, students = []) {
            let cl = new Class({
                grade,
                subjects,
                students
            });

            return new Promise((resolve, reject) => {
                cl.save((err) => {
                    if (err) {
                        return reject(err);
                    }

                    students.sort((first, second) => {
                        let a = first.user;
                        let b = second.user;

                        if (a.firstName === b.firstName) {
                            if (a.lastName === b.lastName) {
                                return 0;
                            } else if (a.lastName < b.lastName) {
                                return -1;
                            } else {
                                return 1;
                            }
                        } else if (a.firstName < b.firstName) {
                            return -1;
                        } else {
                            return 1;
                        }
                    });

                    students.forEach((student, index) => {
                        Student.findOne({ _id: student._id })
                            .exec((err, dbStudent) => {
                                if (err) {
                                    reject(err);
                                }

                                dbStudent.classNumber = index + 1;
                                dbStudent.save();
                            })
                    });

                    return resolve(cl);
                });
            });
        },
        findClassByGradeAndLetter(grade) {
            return new Promise((resolve, reject) => {
                Class.findOne({ grade })
                    .populate("students")
                    .populate({
                        path: 'students',
                        populate: {
                            path: 'user',
                            model: 'User'
                        }
                    })
                    .exec((err, cl) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(cl);
                    });
            });
        },
        findClassById(id) {
            return new Promise((resolve, reject) => {
                Class.findById(id)
                    .populate("students")
                    .populate({
                        path: 'students',
                        populate: {
                            path: 'user',
                            model: 'User'
                        }
                    })
                    .exec((err, user) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(user);
                    });
            });
        },
        addStudentsToClass(studentIds, grade) {
            if (!Array.isArray(studentIds)) {
                studentIds = [studentIds];
            }

            return new Promise((resolve, reject) => {
                Class.findOne({ grade })
                    .exec((err, cl) => {
                        if (err) {
                            return reject(err);
                        }

                        studentIds.forEach(id => {
                            if (cl.students.indexOf(id) < 0) {
                                cl.students.push(id);
                            }
                        });

                        cl.save();

                        Class.populate(cl, {
                                path: 'students',
                                populate: {
                                    path: 'user -password - salt',
                                    model: 'User'
                                }
                            },
                            (err, populatedClass) => {
                                if(err) {
                                    reject(err);
                                }
                                return resolve(populatedClass);
                            });
                    });
            });
        },
        getAllClasses() {
            return new Promise((resolve, reject) => {
                Class.find()
                    .populate("students")
                    .populate({
                        path: 'students',
                        populate: {
                            path: 'user',
                            model: 'User'
                        }
                    })
                    .exec((err, user) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(user);
                    });
            });
        },
        getClassesForUser(username) {
            return this.findTeacherByUsername(username)
                .then(teacher => {
                    return teacher.classes;
                })
        }
    };
};