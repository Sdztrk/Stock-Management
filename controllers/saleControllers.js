const saleModal = require("../modals/saleModal")

//GET   url/sales
exports.getSales = async (req, res) => {
    const sales = await saleModal.find()   //populate("Users", "userId")
    res.status(200).json({
        success:true,
        count:sales.length,
        sales
    })
}

//POST   url/sales
exports.createSale = async (req, res) => {
    const sale = await saleModal.create(req.body)
    res.status(201).json({
        success:true,
        sale
    })
}

//GET   url/sales/:id
exports.getSale = async (req, res) => {
    const sale = await saleModal.findById(req.params.id)
    res.status(200).json({
        success:true,
        sale
    })
}

//PUT-PATCH   url/sales/:id
exports.updateSale = async(req, res) => {
    const sale = await saleModal.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
    res.status(203).json({
        success:true,
        sale
    })
}

//DELETE   url/sales/:id
exports.deleteSale = async(req, res) => {
    await saleModal.findByIdAndDelete(req.params.id)
    res.status(204).json({
        success:true,
        message:"Sale deleted successfully"
    })
}