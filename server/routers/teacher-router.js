"use strict";
module.exports = (server, teacherController, isAuthenticated) => {
    server.get("/api/teacher/:username", teacherController.findTeacherByUsername);
    server.post("/api/teacher", teacherController.createTeacher);
    // server.put("/api/teacher/add-mark", teacherController.addMark);
};