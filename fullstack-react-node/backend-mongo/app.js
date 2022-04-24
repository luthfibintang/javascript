import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import route from "./routes/index.js"

const app = express();

mongoose.connect("mongodb://localhost:27017/products-crud")

const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once('open', () => console.log("database Connected"))

app.use(cors());
app.use(express.json());
app.use('/products', route);

app.listen('5000', () => {
    console.log("Server Listening to port 5000")
})