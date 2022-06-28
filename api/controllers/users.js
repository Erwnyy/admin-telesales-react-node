import User from "../models/User.js"


//Create Data User
export const createUser = async (req, res, next) => {
    const newUser = new User(req.body)

    try {
        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
    } catch (error) {
        next(error)
    }
}

//update data
export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            { new: true }
            );
            console.log(updateUser)
        res.status(200).json(updateUser)
    } catch (error) {
        next(error)
    }
}

//Delete data
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(
            req.params.id);
        res.status(200).json("Data has been deleted")
    } catch (error) {
        next(error)
    }
}

//Get data by id

export const getDataUser = async (req, res, next) => {
    try {
        const user = await User.findById(
            req.params.id);
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

//Get all data
export const getAllData = async (req, res, next) => {
    try {
        const user = await User.find();
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}