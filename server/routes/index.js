const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
    const authHeader = req.header("authorization");

    if (authHeader === null) {
        return res.sendStatus(401);
    }

    let headers = authHeader.split(" ");
    if (headers.length < 1) {
        return res.sendStatus(501);
    }

    const token = authHeader.split(" ")[1];
    if (token === null) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if (err) {
            return res.sendStatus(401).json("Token Validation Error");
        }
        req.auth = verified;
    });
    next();
}

var weightController = require("../controllers/weight-controller");
const authController = require("../controllers/auth-controller");

// // POST: /register - register a new user
router.post("/register", authController.register);
// // POST: /login - log into existing account
router.post("/login", authController.login);

// GET: /weights - lists all the weights
// POST: /weights - adds a new weight
router
    .get("/weights", authenticateJWT, weightController.getWeights)
    .post("/weights", authenticateJWT, weightController.addWeight);

// PUT: /weights/:id - updates a weight entry
// DELETE: /weights/:id - deletes a weight entry
router
    .delete("/weights/:id", authenticateJWT, weightController.deleteWeight)
    .put("/weights/:id", authenticateJWT, weightController.updateWeight);

// GET: /users/:userId - returns the user from the id
router.get("/users/:userId", authenticateJWT, weightController.getUser);

module.exports = router;
