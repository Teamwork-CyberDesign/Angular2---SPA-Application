"use strict";
module.exports = function (data) {
    return {
        createEvent(req, res) {
            let {
                createdBy,
                title,
                description
            } = req.body;

            return data.createEvent(title, description, createdBy)
                .then(event => {
                    res.json(event);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        getEventById(req, res) {
            let eventId = req.params.id;
            return data.getEventById(eventId)
                .then(event => {
                    res.json(event);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        searchEvents(req, res) {
            let title = req.query.title;

            return data.searchEvents(title)
                .then(events => {
                    res.json(events);
                })
                .catch(err => {
                    res.json(err);
                })
        },
        modifyEvent(req, res) {
            let {
                _id,
                title,
                description
            } = req.body;

            return data.modifyEvent(_id, title, description)
                .then(event => {
                    res.json(event);
                })
                .catch(err => {
                    res.json(err)
                });
        }
    };
};