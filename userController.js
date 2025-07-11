import { userModel } from "./userSchema.js";

export const userGet = (req, res) => {
    userModel.find().then((data) => {
        if (data) { res.status(200).send(data) } else { res.status(200).send(null) }
    })
}


export const userGetById = (req, res) => {
    userModel.findById(req.params.id).then((data) => {
        if (data) { res.status(200).send(data) } else { res.status(200).send(null) }
    })
}

export const userPost = (req, res) => {
    const data = req.body;
    if (data.name.trim()) {
        userModel.create(data);
        res.status(201).send(data);
    }
    else { res.status(400).send({ message: "Please fill all fields" }) }
}


export const userDelete = (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndDelete(id).then(() => {
        res.status(200).send({ message: "user deleted successfully" });
    }).catch(() => { res.status(500).send({ message: " not found" }) })
}

export const userPut = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    if (data.name.trim()) {
        userModel.create(data);
        res.status(201).send(data);
    } else { res.status(400).send({ message: "Please fill all fields" }) }
}