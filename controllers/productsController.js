const productModal = require("../modals/productModal")

//GET   url/products
exports.getProducts = async (req, res) => {
    const products = await productModal.find()
    res.status(200).json({
        success:true,
        count:products.length,
        products
    })
}

//POST   url/products
exports.createProduct = async (req, res) => {
    const product = await productModal.create(req.body)
    res.status(201).json({
        success:true,
        product
    })
}

//GET   url/products/:id
exports.getProduct = async (req, res) => {
    const product = await productModal.findById(req.params.id)
    res.status(200).json({
        success:true,
        product
    })
}

//PUT-PATCH   url/products/:id
exports.updateProduct = async(req, res) => {
    const product = await productModal.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
    res.status(203).json({
        success:true,
        product
    })
}

//DELETE   url/products/:id
exports.deleteProduct = async(req, res) => {
    await productModal.findByIdAndDelete(req.params.id)
    res.status(204).json({
        success:true,
        message:"Product deleted successfully"
    })
}