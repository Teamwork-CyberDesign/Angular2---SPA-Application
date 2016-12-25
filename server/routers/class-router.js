"use strict";
module.exports = (server, classController, isAuthenticated) => {
    server.get("/api/class", classController.findClassByGradeAndLetter);
    server.get("/api/class/:user", classController.findClassesForUser);
    server.post("/api/class", classController.createClass);
    server.put("/api/class/add-student", classController.addStudentsToClass);
};