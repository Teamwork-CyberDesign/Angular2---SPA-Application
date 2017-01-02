/* globals require module Promise */
"use strict";

module.exports = function (models) {
    let { Event } = models;

    return {
        createEvent(title, description, user) {
            let event = new Event({
                title,
                description,
                createdBy: user
            });

            return new Promise((resolve, reject) => {
                event.save((err, event) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(event);
                })
            });

        },
        modifyEvent(id, title, description) {
            return new Promise((resolve, reject) => {
                Event.findOneAndUpdate(
                    { _id: id },
                    {
                        title,
                        description
                    },
                    { new: true },
                    (err, event) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(event);
                    }
                )
            });
        },
        searchEvents(title) {
            let query = { "title": new RegExp(title, "i") };
            return new Promise((resolve, reject) => {
                Event.find(query)
                    .sort({ createdAt: -1 })
                    .exec((err, event) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(event);
                    });
            });
        },
        getEventById(id) {
            return new Promise((resolve, reject) => {
                Event.findOne({ _id: id })
                    .exec((err, event) => {
                        if (err) {
                            return reject(err);
                        }

                        return resolve(event);
                    });
            });
        }
    }
};