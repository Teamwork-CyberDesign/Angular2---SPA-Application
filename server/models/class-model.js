/* mongoose global */
"use strict";

const mongoose = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

let ClassSchema = new Schema({
    grade: { type: String, unique: true },
    students: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    subjects: { type: [String] },
});

// ClassSchema.plugin(mongoosePaginate);

let Class;
mongoose.model("Class", ClassSchema);
Class = mongoose.model("Class");
module.exports = Class;