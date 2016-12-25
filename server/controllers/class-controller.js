"use strict";
module.exports = function (data) {
    return {
        findClassByGradeAndLetter(req, res) {
            let grade = req.query.grade;
            if (grade) {
                return data.findClassByGradeAndLetter(grade)
                    .then(cl => {
                        res.json(JSON.stringify(cl));
                    })
                    .catch(err => {
                        res.json(JSON.stringify(err));
                    });
            } else {
                return data.getAllClasses()
                    .then(classes => {
                        res.json(JSON.stringify(classes));
                    })
                    .catch(err => {
                        res.json(JSON.stringify(err));
                    });
            }
        },
        createClass(req, res) {
            let {
                grade,
                subjects,
                students
            } = req.body;

            return data.createClass(grade, subjects, students)
                .then(cl => {
                    res.json(JSON.stringify(cl));
                })
                .catch(err => {
                    res.json(JSON.stringify(err));
                });
        },
        addStudentsToClass(req, res) {
            let {
                grade,
                students
            } = req.body;

            return data.addStudentsToClass(students, grade)
                .then(cl => {
                    res.json(JSON.stringify(cl));
                })
                .catch(err => {
                    res.json(JSON.stringify(err));
                });
        },
        findClassesForUser(req, res) {
            let user = req.params.user;
            return data.getClassesForUser(user)
                .then(classes => {
                    res.json(JSON.stringify(classes));
                })
                .catch(err => {
                    res.json(JSON.stringify(err));
                });
        }
    };
};