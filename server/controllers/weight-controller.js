const Weight = require("../models/weight-model");
const User = require("../models/user-model");

// GET: /users/:userId- returns the user from the id
const getUser = async (req, res) => {
    if (!req.auth) return res.status(401).json("Not Authorized");
    const user = await User.findById(req.params.userId).exec();
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
};

// GET: /weights - returns all weights
const getWeights = async (req, res) => {
    if (!req.auth) return res.status(401).json("Not Authorized");
    const q = await Weight.find({ userId: req.auth._id }).exec();

    if (!q) {
        return res.status(404).json({ message: "No weights found" });
    } else {
        return res.status(200).json(q);
    }
};

// POST: /weights - create a new weight entry
const addWeight = async (req, res) => {
    if (!req.auth) return res.status(401).json("Not Authorized");
    const { weight, recordedDate } = req.body;
    const newWeight = new Weight({
        weight,
        recordedDate,
        userId: req.auth._id,
    });

    try {
        const savedWeight = await newWeight.save();
        return res.status(201).json(savedWeight);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Put: /weights/:id - update a weight entry
const updateWeight = async (req, res) => {
    if (!req.auth) return res.status(401).json("Not Authorized");
    const { weight, recordedDate } = req.body;
    try {
        const updatedWeight = await Weight.findByIdAndUpdate(
            req.params.id,
            { weight, recordedDate },
            { new: true },
        ).exec();
        if (!updatedWeight) {
            return res.status(404).json({ message: "Weight entry not found" });
        }
        return res.status(200).json(updatedWeight);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// DELETE: /weights/:id - delete a weight entry
const deleteWeight = async (req, res) => {
    if (!req.auth) return res.status(401).json("Not Authorized");
    try {
        const deletedWeight = await Weight.findByIdAndDelete(
            req.params.id,
        ).exec();
        if (!deletedWeight) {
            return res.status(404).json({ message: "Weight entry not found" });
        }
        return res
            .status(200)
            .json({ message: "Weight entry deleted successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = { getWeights, addWeight, updateWeight, deleteWeight, getUser };
