const passport = require("passport");
const User = require("../models/user-model");

const register = async (req, res) => {
    // Validate message to ensure all params are present
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: "All fields required" });
    }

    const user = new User({
        email: req.body.email,
        goalWeight: req.body.goalWeight,
        heightInInches: req.body.heightInInches,
    });
    user.setPassword(req.body.password);
    try {
        await user.save();
        const token = user.generateJWT();
        return res.status(200).json({ token });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "User already exists" });
        }
        return res.status(400).json({
            message: `Error occurred while registering: ${error.message}`,
        });
    }

    // if (!q) {
    //     return res.status(400).json({ message: "No data returned" });
    // } else {
    //     const token = user.generateJWT();
    //     return res.status(200).json({ token });
    // }
};

const login = (req, res) => {
    // Validate message to ensure that email and password are present
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: "All fields required" });
    }

    // Delegate authentication to passport module
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            // Error in authentication process
            return res.status(404).json(err);
        }

        if (user) {
            // Auth succeeded - generate JWT and return to caller
            const token = user.generateJWT();
            res.status(200).json({ token });
        } else {
            // Auth failed return error
            res.status(401).json({ message: info.message });
        }
    })(req, res);
};

const checkUserExists = async (req, res) => {
    let token;

    // 1. Extract token from the Authorization header
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return res
            .status(401)
            .json({ message: "Not authorized, no token provided" });
    }

    try {
        const userExists = await User.exists({ _id: token.id });

        if (!userExists) {
            return res
                .status(401)
                .json({ message: "Not authorized, user no longer exists" });
        }
        return res.status(200).json({ message: "User exists" });
    } catch (error) {
        return res
            .status(401)
            .json({ message: "Not authorized, token failed or expired" });
    }
};

module.exports = { register, login, checkUserExists };
