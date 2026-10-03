const mongoose = require("mongoose");
var gracefulShutdown;
const dbURI = process.env.MONGODB_URI;
const readline = require("readline");

// Build the connection string and set the connection timeout.
// timeour is in milliseconds
mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected to db`);
});

mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});

// Window specific listener
if (process.platform === "win32") {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on("SIGINT", () => {
        process.emit("SIGINT");
    });
}

// Configure for Graceful Shutdown
gracefulShutdown = (msg) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
    });
};

// Event listeners to process graceful shutdowns

// For nodemon restarts
process.on("SIGUSR2", () => {
    gracefulShutdown("nodemon restart", () => {
        process.kill(process.pid, "SIGUSR2");
    });
});

// For app termination
process.on("SIGINT", () => {
    gracefulShutdown("app termination", () => {
        process.exit(0);
    });
});

// For container shutdown
process.on("SIGTERM", () => {
    gracefulShutdown("app shutdown", () => {
        process.exit(0);
    });
});

require("./weight-model");
