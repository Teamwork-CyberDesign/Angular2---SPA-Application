"use strict";
module.exports = (server, eventController, isAuthenticated) => {
    server.get("/api/event", eventController.searchEvents);
    server.get("/api/event/:id", eventController.getEventById);
    server.post("/api/event", isAuthenticated, eventController.createEvent);
    server.put("/api/event", isAuthenticated, eventController.modifyEvent);
};