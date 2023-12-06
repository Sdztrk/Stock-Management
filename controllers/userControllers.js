const userModal = require("../modals/userModal")

//GET   url/users
exports.getUsers = async (req, res) => {
    const users = await userModal.find()
    res.status(200).json({
        success:true,
        count:users.length,
        users
    })
}

//POST   url/users
exports.createUser = async (req, res) => {
    const user = await userModal.create(req.body)
    res.status(201).json({
        success:true,
        user
    })
}

//GET   url/users/:id
exports.getUser = async (req, res) => {
    const user = await userModal.findById(req.params.id)
    res.status(200).json({
        success:true,
        user
    })
}

//PUT-PATCH   url/users/:id
exports.updateUser = async(req, res) => {
    const user = await userModal.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
    res.status(203).json({
        success:true,
        user
    })
}

//DELETE   url/users/:id
exports.deleteUser = async(req, res) => {
    await userModal.findByIdAndDelete(req.params.id)
    res.status(204).json({
        success:true,
        message:"User deleted successfully"
    })
}