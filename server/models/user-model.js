const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Weight = require("./weight-model");

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    hash: String,
    salt: String,
    goalWeight: Number,
    weights: [Weight.schema],
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
