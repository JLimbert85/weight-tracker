require("dotenv").config();
const express = require("express");
const app = express();
const dbSource = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;
const cors = require("cors");
const http = require("http");

app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
};

mongoose.connect(dbSource, clientOptions);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

const weightRouter = require("./controllers/weight-controller");
const Weight = require("./models/weight-model");
app.use("/api", weightRouter);

const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
    console.log("Client connected");

    // Watch entire collection or use a pipeline to filter
    const changeStream = Weight.watch([], { fullDocument: "updateLookup" });

    changeStream.on("change", (change) => {
        // Send change event (insert, update, delete) to Angular
        socket.emit("documentChanged", change);
    });

    socket.on("disconnect", () => {
        changeStream.close();
    });
});

server.listen(3200);
