const mongoose = require("mongoose");
var gracefulShutdown;
const dbURI = process.env.MONGODB_URI;
const readline = require("readline");

// Build the connection string and set the connection timeout.
// timeour is in milliseconds
mongoose.connect(dbURI);

// Handle connection events and log them to the console.
mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected to db`);
});

// Handle connection errors and log them to the console.
mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error:", err);
});

// Handle connection disconnection and log it to the console.
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});

// Window specific listener for handling SIGINT on Windows.
if (process.platform === "win32") {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on("SIGINT", () => {
        process.emit("SIGINT");
    });
}

// Configure for Graceful Shutdown of the database connection.
gracefulShutdown = (msg) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
    });
};

// Event listeners to process graceful shutdowns of the application.

// Event listener for handling nodemon restarts.
process.on("SIGUSR2", () => {
    gracefulShutdown("nodemon restart", () => {
        process.kill(process.pid, "SIGUSR2");
    });
});

// Event listener for handling application termination.
process.on("SIGINT", () => {
    gracefulShutdown("app termination", () => {
        process.exit(0);
    });
});

// Event listener for handling container shutdown.
process.on("SIGTERM", () => {
    gracefulShutdown("app shutdown", () => {
        process.exit(0);
    });
});

// Import the weight model to ensure it is registered with Mongoose.
require("./weight-model");
// Import the user model to ensure it is registered with Mongoose.
require("./user-model");
