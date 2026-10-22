require("dotenv").config();
const express = require("express");
const createError = require("http-errors");
const port = process.env.PORT || 3000;
const cors = require("cors");
const passport = require("passport");

// Import the database connection and models.
require("./models/db");
require("./config/passport");

// Import the routes for the API.
const router = require("./routes/index");
// Create the Express application.
const app = express();

// Use JSON body parser.
app.use(express.json());
// Enable CORS for all routes.
app.use(cors());
// Initialize Passport for authentication.
app.use(passport.initialize());
// Use the API router for all /api routes.
app.use("/api", router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.status(401).json({ message: err.name + ": " + err.message });
    }
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
});

// Start the server and listen on the specified port.
app.listen(port);

module.exports = app;
