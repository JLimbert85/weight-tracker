const Weight = require("../models/weight-model");
const User = require("../models/user-model");

// Controller for handling user-related operations, including fetching and updating user data.
// Provides functions to get a user by ID, update a user by ID, and manage weight entries for the authenticated user.
const getUser = async (req, res) => {
    if (!req.auth) return res.status(401).json("Not Authorized");
    const user = await User.findById(req.params.userId).exec();
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
};

// Controller for updating user data by ID.
const updateUser = async (req, res) => {
    if (!req.auth) return res.status(401).json("Not Authorized");
    const { goalWeight, heightInInches } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            { goalWeight, heightInInches },
            { new: true },
        ).exec();
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Controller for fetching all weight entries for the authenticated user.
const getWeights = async (req, res) => {
    if (!req.auth) return res.status(401).json("Not Authorized");
    const q = await Weight.find({ userId: req.auth._id }).exec();

    if (!q) {
        return res.status(404).json({ message: "No weights found" });
    } else {
        return res.status(200).json(q);
    }
};

// Controller for creating a new weight entry for the authenticated user.
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

// Controller for updating a weight entry by ID for the authenticated user.
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

// Controller for deleting a weight entry by ID for the authenticated user.
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

module.exports = {
    getWeights,
    addWeight,
    updateWeight,
    deleteWeight,
    getUser,
    updateUser,
};
