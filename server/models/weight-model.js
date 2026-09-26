const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weightSchema = new Schema({
    weight: { type: Number, required: true },
    recordedDate: { type: Date, required: true },
});

const Weight = mongoose.model("Weight", weightSchema);
module.exports = Weight;
