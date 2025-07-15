import express from 'express';
import { userRoutes } from './Routes/userRoutes.js';
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import path from "path";
import cors from "cors"


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static(path.join(process.cwd(), "images")));
dotenv.config();
const port = process.env.BACKEND_PORT;
const uri = process.env.DB_URI;
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use("/api/v1/users", userRoutes);


mongoose.connect(uri).then(() => {
    console.log("mongoose connected");
})

app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
});