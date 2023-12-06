const purchaseModal = require("../modals/purchaseModal")

//GET   url/purchases
exports.getPurchases = async (req, res) => {
    const purchases = await purchaseModal.find()
    res.status(200).json({
        success:true,
        count:purchases.length,
        purchases
    })
}

//POST   url/purchases
exports.createPurchase = async (req, res) => {
    const purchase = await purchaseModal.create(req.body)
    res.status(201).json({
        success:true,
        purchase
    })
}

//GET   url/purchases/:id
exports.getPurchase = async (req, res) => {
    const purchase = await purchaseModal.findById(req.params.id)
    res.status(200).json({
        success:true,
        purchase
    })
}

//PUT-PATCH   url/purchases/:id
exports.updatePurchase = async(req, res) => {
    const purchase = await purchaseModal.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
    res.status(203).json({
        success:true,
        purchase
    })
}

//DELETE   url/purchases/:id
exports.deletePurchase = async(req, res) => {
    await purchaseModal.findByIdAndDelete(req.params.id)
    res.status(204).json({
        success:true,
        message:"Purchase deleted successfully"
    })
}