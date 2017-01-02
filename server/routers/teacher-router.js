"use strict";
module.exports = (server, teacherController, isAuthenticated, user) => {
    server.get("/api/teacher/:username", teacherController.findTeacherByUsername);
    server.get("/api/teacher", teacherController.searchTeachers);
    server.post("/api/teacher", isAuthenticated, user.is("teacher"), teacherController.createTeacher);
    server.put("/api/teacher/add-classes", isAuthenticated, user.is("teacher"), teacherController.addClassesToTeacher);
};