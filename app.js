import express from 'express';
import { userRoutes } from './userRoutes.js';

const app = express();

app.use("/api/v1/users", userRoutes)
app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});