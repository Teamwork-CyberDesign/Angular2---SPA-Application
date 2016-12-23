"use strict";
module.exports = (server, teacherController, isAuthenticated) => {
    server.get("/api/teacher", teacherController.findTeacherByUsername);
    server.post("/api/teacher", teacherController.createTeacher);
    // server.put("/api/teacher/add-mark", teacherController.addMark);
};