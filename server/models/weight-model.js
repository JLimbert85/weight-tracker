const mongoose = require("mongoose");

// Define the schema for the weight model.
// This schema includes fields for userId, weight, and recordedDate.
const weightSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    weight: { type: Number, required: true },
    recordedDate: { type: Date, required: true },
});

// Create the Weight model based on the weightSchema.
const Weight = mongoose.model("weights", weightSchema);
module.exports = Weight;
