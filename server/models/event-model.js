/* mongoose global */
"use strict";

const mongoose = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

let EventSchema = new Schema({
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        createdBy: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    });

// EventSchema.plugin(mongoosePaginate);

let Event;
mongoose.model("Event", EventSchema);
Event = mongoose.model("Event");
module.exports = Event;