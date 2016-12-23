/* mongoose global */
"use strict";

const mongoose = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

let ClassSchema = new Schema({
    grade: Number,
    letter: {
        type: String,
        minLength: 1,
        maxLength: 1,
    },
    students: [{ type : Schema.Types.ObjectId, ref: 'User' }],
    subjects: { type: [String] },
});

// ClassSchema.plugin(mongoosePaginate);

let Class;
mongoose.model("Class", ClassSchema);
Class = mongoose.model("Class");
module.exports = Class;