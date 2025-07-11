import { Router } from "express";
import { userDelete, userGetById, userPost, userPut, userGet } from "./userController.js";

export const userRoutes = new Router()
//user GET REQUEST
userRoutes.get("/", userGet)
//user GET REQUEST BY ID
userRoutes.get("/:id", userGetById)
//user POST REQUEST
userRoutes.post("/", userPost)
//user DELETE REQUEST
userRoutes.delete("/:id", userDelete)
//user PUT REQUEST
userRoutes.put("/:id", userPut)