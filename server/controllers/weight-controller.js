const Weight = require("../models/weight-model");
const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        const weights = await Weight.find();
        res.json(weights);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new weight entry
router.post("/", async (req, res) => {
    const { weight, recordedDate } = req.body;
    const newWeight = new Weight({ weight, recordedDate });

    try {
        const savedWeight = await newWeight.save();
        res.status(201).json(savedWeight);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
