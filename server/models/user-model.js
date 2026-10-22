const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// Define the schema for the user model.
// This schema includes fields for email, hashed password, salt, goal weight, and height in inches.
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    hash: String,
    salt: String,
    goalWeight: Number,
    heightInInches: Number,
});

// Method to set the password as hash and salt for a user
userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
        .toString("hex");
};

// Method to compare entered password against stored hash
userSchema.methods.validPassword = function (password) {
    var hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
        .toString("hex");
    return this.hash === hash;
};

// Mehtod to generate a JSON Web Token for the current user
userSchema.methods.generateJWT = function () {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign(
        {
            // Payload for our JSON Web Token
            _id: this.id,
            exp: parseInt(expiry.getTime() / 1000),
        },
        process.env.JWT_SECRET, // SECRET stored in .env
    );
};

// Create the User model based on the userSchema.
const User = mongoose.model("users", userSchema);
module.exports = User;
