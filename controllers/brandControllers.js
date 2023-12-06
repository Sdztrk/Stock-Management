const brandModal = require("../modals/brandModal")

//GET   url/brands
exports.getBrands = async (req, res) => {
    const brands = await brandModal.find()
    res.status(200).json({
        success:true,
        count:brands.length,
        brands
    })
}

//POST   url/brands
exports.createBrand = async (req, res) => {
    const brand = await brandModal.create(req.body)
    res.status(201).json({
        success:true,
        brand
    })
}

//GET   url/brands/:id
exports.getBrand = async (req, res) => {
    const brand = await brandModal.findById(req.params.id)
    res.status(200).json({
        success:true,
        brand
    })
}

//PUT-PATCH   url/brands/:id
exports.updateBrand = async(req, res) => {
    const brand = await brandModal.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
    res.status(203).json({
        success:true,
        brand
    })
}

//DELETE   url/brands/:id
exports.deleteBrand = async(req, res) => {
    await brandModal.findByIdAndDelete(req.params.id)
    res.status(204).json({
        success:true,
        message:"Brand deleted successfully"
    })
}