import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js'
import projectRoutes from './routes/projectRoutes.js'


const app = express();
app.use(express.json());
dotenv.config();

app.use("/api/user",userRoutes);
app.use("/api/project",projectRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(async () => {
    app.listen(5050, () => {
        console.log("✅ Server running at http://localhost:5050");
    });
})
.catch((err) => {
    console.log(err);
});