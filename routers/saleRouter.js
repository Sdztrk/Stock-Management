const router = require("express").Router()
const saleControllers = require("../controllers/saleControllers")

router.route("/")
.get(saleControllers.getSales)
.post(saleControllers.createSale)

router.route("/:id")
.get(saleControllers.getSale)
.put(saleControllers.updateSale)
.delete(saleControllers.deleteSale)

module.exports = router