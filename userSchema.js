import { model, Schema } from "mongoose";

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    phoneNumber: String,
    avatar: String
});

export const userModel = model("User", userSchema);