require("dotenv").config();
const express = require("express");
const createError = require("http-errors");
// const dbSource = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;
const cors = require("cors");
const passport = require("passport");

require("./models/db");
require("./config/passport");

const router = require("./routes/index");
const app = express();

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
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

// const mongoose = require("mongoose");
// const clientOptions = {
//     serverApi: { version: "1", strict: true, deprecationErrors: true },
// };

// mongoose.connect(dbSource, clientOptions);

// const connection = mongoose.connection;
// connection.once("open", () => {
//     console.log("MongoDB database connection established successfully");
// });
// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });

// const http = require("http");
// const Weight = require("./models/weight-model");
// const server = http.createServer(app);
// const { Server } = require("socket.io");

// const io = new Server(server, { cors: { origin: "*" } });

// io.on("connection", (socket) => {
//     console.log("Client connected");

//     // Watch entire collection or use a pipeline to filter
//     const changeStream = Weight.watch([], { fullDocument: "updateLookup" });

//     changeStream.on("change", (change) => {
//         // Send change event (insert, update, delete) to Angular
//         socket.emit("documentChanged", change);
//     });

//     socket.on("disconnect", () => {
//         changeStream.close();
//     });
// });

app.listen(port);

module.exports = app;
