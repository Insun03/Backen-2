import { Router } from "express";
import multer from "multer";
import path from "path";

import { userDelete, userGetById, userPost, userPut, usersGet } from "../Controllers/userController.js";

export const userRoutes = new Router()
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "images"),
    filename: (req, file, cb) => {
        const axtName = path.extname(file.originalname);
        const imageName = req.body.firstName + "-" + Date.now() + axtName;
        cb(null, imageName);
    }
});


const upload = multer({ storage: storage });
//user GET REQUEST
userRoutes.get("/", usersGet)
//user GET REQUEST BY ID
userRoutes.get("/:id", userGetById)
//user POST REQUEST
userRoutes.post("/", upload.single("avatar"), userPost)
//user DELETE REQUEST
userRoutes.delete("/:id", userDelete)
//user PUT REQUEST 
userRoutes.put("/:id", upload.single("avatar"), userPut)

//static images route
