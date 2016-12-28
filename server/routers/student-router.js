"use strict";
module.exports = (server, studentController, isAuthenticated) => {
    // server.get("/api/student", studentController.findStudentByUser);
    server.get("/api/student", studentController.getAllStudents);
    server.post("/api/student", studentController.createStudent);
    server.post("/api/student/add-class", studentController.addStudentsToClass);
    server.put("/api/student/add-marks", isAuthenticated, studentController.addMark);
};