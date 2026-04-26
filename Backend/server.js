import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();
const User = mongoose.model("User", {
  name: String,
  email: String
});

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    app.listen(5050, () => {
        console.log("✅ Server running at http://localhost:5050");
    });
})
.catch((err) => {
    console.log(err);
});