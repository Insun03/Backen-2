import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    phoneNumber: String,
    avatar: String,
});

export const userModel = mongoose.model("User", userSchema);