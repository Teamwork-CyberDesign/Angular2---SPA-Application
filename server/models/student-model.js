/* mongoose global */
"use strict";

const mongoose = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

let MarkInfoSchema = new Schema({
    subject: String,
    marks: [Number]
});

let StudentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", unique: true },
    username: { type: String, unique: true },
    // class: { type: Schema.Types.ObjectId, ref: "Class" },
    classNumber: { type: Number },
    EGN: { type: Number },
    marks: {
        type: [MarkInfoSchema]
    },
    oldMarks: {
        "class": String,
        marks: [MarkInfoSchema]
    }
});

// StudentSchema.plugin(mongoosePaginate);

let Student;
mongoose.model("Student", StudentSchema);
Student = mongoose.model("Student");
module.exports = Student;