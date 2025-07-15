import { userModel } from "../SChemas/userSchema.js";


export const usersGet = (req, res) => {
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
    const file = req.file;
    if (data.age < 18) { res.status(400).send({ message: "user must be at least 18 years old" }) }
    else if (data.firstName.trim() && data.lastName.trim() && data.phoneNumber.trim() && file) {
        const newUser = {
            ...data,
            avatar: file.filename
        };
        userModel.create(data && newUser);
        res.status(201).send(data && file);
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
    const file = req.file;
    if (data.firstName.trim() && data.lastName.trim() && data.phoneNumber.trim() && file) {
        const newUser = {
            ...data,
            avatar: file.filename
        };
        userModel.findByIdAndUpdate(data && newUser);
        res.status(201).send({ message: "user update successfully" }, data);
    } else { res.status(400).send({ message: "Please fill all fields" }) }
}

