/* mongoose global */
"use strict";

const mongoose = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

let TeacherSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    classes: { type: [Schema.Types.ObjectId], ref: "Class"},
    subject: { type: String },
});

// TeacherSchema.plugin(mongoosePaginate);

let Teacher;
mongoose.model("Teacher", TeacherSchema);
Teacher = mongoose.model("Teacher");
module.exports = Teacher;