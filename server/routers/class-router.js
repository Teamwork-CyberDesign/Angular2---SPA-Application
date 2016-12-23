"use strict";
module.exports = (server, classController, isAuthenticated) => {
    server.get("/api/class", classController.findClassByGradeAndLetter);
    server.post("/api/class", classController.createClass);
    server.put("/api/class/add-student", classController.addStudentsToClass);
};