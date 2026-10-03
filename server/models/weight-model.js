const mongoose = require("mongoose");

const weightSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    weight: { type: Number, required: true },
    recordedDate: { type: Date, required: true },
});

const Weight = mongoose.model("weights", weightSchema);
module.exports = Weight;
