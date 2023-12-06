const firmModal = require("../modals/firmModals")

//GET   url/firms
exports.getFirms = async (req, res) => {
    const firms = await firmModal.find()
    res.status(200).json({
        success:true,
        count:firms.length,
        firms
    })
}

//POST   url/firms
exports.createFirm = async (req, res) => {
    const firm = await firmModal.create(req.body)
    res.status(201).json({
        success:true,
        firm
    })
}

//GET   url/firms/:id
exports.getFirm = async (req, res) => {
    const firm = await firmModal.findById(req.params.id)
    res.status(200).json({
        success:true,
        firm
    })
}

//PUT-PATCH   url/firms/:id
exports.updateFirm = async(req, res) => {
    const firm = await firmModal.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
    res.status(203).json({
        success:true,
        firm
    })
}

//DELETE   url/firms/:id
exports.deleteFirm = async(req, res) => {
    await firmModal.findByIdAndDelete(req.params.id)
    res.status(204).json({
        success:true,
        message:"Firm deleted successfully"
    })
}