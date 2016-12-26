"use strict";
module.exports = (server, studentController, isAuthenticated) => {
    server.get("/api/student", studentController.findStudentByUser);
    server.post("/api/student", studentController.createStudent);
    server.put("/api/student/add-marks", isAuthenticated, studentController.addMark);
};