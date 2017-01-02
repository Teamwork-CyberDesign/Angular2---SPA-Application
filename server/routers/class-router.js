"use strict";
module.exports = (server, classController, isAuthenticated, user) => {
    server.get("/api/class", classController.findClassByGradeAndLetter);
    server.get("/api/class/:user", classController.findClassesForUser);
    server.get("/api/class/subject/:subject", classController.findClassesWithSubject);
    server.post("/api/class", isAuthenticated, user.is("teacher"), classController.createClass);
    server.put("/api/class/add-student", isAuthenticated, user.is("teacher"), classController.addStudentsToClass);
};