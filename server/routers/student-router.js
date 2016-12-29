"use strict";
module.exports = (server, studentController, isAuthenticated) => {
    server.get("/api/student/:username", studentController.findStudentByUsername);
    server.get("/api/student", studentController.searchStudents);
    server.post("/api/student", isAuthenticated, studentController.createStudent);
    server.post("/api/student/add-class", isAuthenticated, studentController.addStudentsToClass);
    server.put("/api/student/add-marks", isAuthenticated, studentController.addMark);
};