import express from 'express';
import { userRoutes } from './userRoutes.js';
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from 'body-parser';


const app = express();
app.use(express.json());
app.use(bodyParser.json());
dotenv.config();
const port= process.env.BACKEND_PORT;
const uri=process.env.DB_URI;
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use("/api/v1/users", userRoutes);


mongoose.connect(uri).then(()=>{console.log("mongoose connected");
})

app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
});