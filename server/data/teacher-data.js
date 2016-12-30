/* globals require module Promise */
"use strict";

module.exports = function (models) {
    let { Teacher, User } = models;

    return {
        createTeacher(username, subject, classes) {
            return new Promise((resolve, reject) => {
                User.findOne({ username })
                    .exec((err, user) => {
                        if (err) {
                            return reject(err);
                        }

                        if (!user) {
                            return reject({ errmsg: "Teacher's user not found!" });
                        }

                        user.role = 'teacher';
                        user.save(err => {
                            if (err) {
                                reject(err);
                            }
                        });

                        let teacher = new Teacher({
                            user: user._id,
                            username,
                            subject,
                            classes
                        });

                        teacher.save((err) => {
                            if (err) {
                                return reject(err);
                            }

                            return resolve(teacher);
                        });
                    });
            });
        },
        findTeacherByUserId(user) {
            return new Promise((resolve, reject) => {
                Teacher.findOne({ user })
                    .populate("user", "-password -salt")
                    .populate("classes")
                    .exec((err, cl) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(cl);
                    });
            });
        },
        findTeacherByUsername(username) {
            let query = { "username": new RegExp(username, "i") };
            return new Promise((resolve, reject) => {
                Teacher.findOne(query)
                    .populate("user", "-password -salt")
                    .populate("classes")
                    .populate({
                        path: 'classes',
                        populate: {
                            path: 'students',
                            model: 'Student',
                            populate: {
                                path: 'user',
                                model: 'User'
                            }
                        }
                    })
                    .exec((err, teacher) => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve(teacher);
                    });
            });
        },
        findTeacherById(id) {
            return new Promise((resolve, reject) => {
                Teacher.findById(id)
                    .populate("user", "-password -salt")
                    .populate("classes")
                    .exec((err, user) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(user);
                    });
            });
        },
        getAllTeachers() {
            return new Promise((resolve, reject) => {
                Teacher.find({})
                    .populate("user", "-password -salt")
                    .populate("classes")
                    .exec((err, user) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(user);
                    });
            });
        },
        searchTeachers(username) {
            let query = { "username": new RegExp(username, "i") };
            return new Promise((resolve, reject) => {
                Teacher.find(query)
                    .populate("user", "-password -salt")
                    .exec((err, teachers) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(teachers);
                    });
            });
        },
        addClassesToTeacher(username, classes) {
            return new Promise((resolve, reject) => {
                Teacher.findOneAndUpdate(
                    { username },
                    { classes })
                    .populate("user", "-password -salt")
                    .exec((err, teacher) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(teacher);
                    });
            });
        }
    };
};