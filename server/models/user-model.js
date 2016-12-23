/* mongoose global */
"use strict";

const mongoose = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;
const constants = require("../config/constants");
const passHasher = require("../utils/salt-hash-password");
const roles = ["student", "teacher", "headmaster"];

let UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        index: { unique: true },
        validate: {
            validator: (v) => {
                return constants.usernameRegex.test(v) && v.length >= constants.usernameMinLength;
            },
            message: "{VALUE} is not a valid username!"
        }
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: { unique: true }
    },
    salt: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return v.length === constants.saltLength;
            },
            message: "{VALUE} is not a valid salt!"
        }
    },
    role: {
        type: String,
        enum: roles,
        default: "student"
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

UserSchema
    .virtual("fullName")
    .get(function () {
        // noinspection Eslint - mongoose is messing with eslint
        return `${this.firstName} ${this.lastName}`;
    });

UserSchema.query.byName = function (name) {
    let query = { "username": new RegExp(name, "i") };
    return this.find(query);
};

UserSchema.methods.comparePassword = function (password) {
    return this.password === passHasher.getHash(password, this.salt);
};

UserSchema.statics.validatePassword = function (password) {
    if (password.length < constants.passwordMinLength || !constants.passwordRegex.test(password)) {
        throw new Error("Password must be at least 6 characters long and can contain only the symbols A-Z, a-z, 0-9 and _.!@#$%^&*(){}:\"<>?~|");
    }
};

UserSchema.statics.generateHash = function (password) {
    return passHasher.saltThenHash(password);
};

UserSchema.statics.generateCryptoString = function (length) {
    return passHasher.randomCryptoString(length);
};

UserSchema.statics.findOrCreate = function (profile, cb) {
    let userObj = new this();
    this.findOne({ id: profile.id }, (err, result) => {
        if (result) {
            return cb(err, result);
        }
        userObj.username = profile.displayName;
        userObj.save(cb);
    });
};

// UserSchema.plugin(mongoosePaginate);

let User;
mongoose.model("User", UserSchema);
User = mongoose.model("User");
module.exports = User;