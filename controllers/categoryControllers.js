const categoryModal = require("../modals/categoryModal")

//GET   url/categories
exports.getCategories = async (req, res) => {
    const categories = await categoryModal.find()
    res.status(200).json({
        success:true,
        count:categories.length,
        categories
    })
}

//POST   url/categories
exports.createCategory = async (req, res) => {
    const category = await categoryModal.create(req.body)
    res.status(201).json({
        success:true,
        category
    })
}

//GET   url/categories/:id
exports.getCategory = async (req, res) => {
    const category = await categoryModal.findById(req.params.id)
    res.status(200).json({
        success:true,
        category
    })
}

//PUT-PATCH   url/categories/:id
exports.updateCategory = async(req, res) => {
    const category = await categoryModal.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
    res.status(203).json({
        success:true,
        category
    })
}

//DELETE   url/categories/:id
exports.deleteCategory = async(req, res) => {
    await categoryModal.findByIdAndDelete(req.params.id)
    res.status(204).json({
        success:true,
        message:"Category deleted successfully"
    })
}