/* mongoose global */
"use strict";

const mongoose = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", unique: true },
    // class: { type: Schema.Types.ObjectId, ref: "Class" },
    classNumber: { type: Number },
    EGN: { type: Number },
    marks: {
        type: [{
            subject: String,
            marks: [Number]
        }]
    }
});

// StudentSchema.plugin(mongoosePaginate);

let Student;
mongoose.model("Student", StudentSchema);
Student = mongoose.model("Student");
module.exports = Student;