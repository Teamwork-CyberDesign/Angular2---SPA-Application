"use strict";
module.exports = (server, eventController, isAuthenticated, user) => {
    server.get("/api/event", eventController.searchEvents);
    server.get("/api/event/:id", eventController.getEventById);
    server.post("/api/event", isAuthenticated, user.is("teacher"), eventController.createEvent);
    server.put("/api/event", isAuthenticated, user.is("teacher"), eventController.modifyEvent);
};