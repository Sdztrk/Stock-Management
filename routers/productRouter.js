const router = require("express").Router()
const productControllers = require("../controllers/productsController")

router.route("/")
.get(productControllers.getProducts)
.post(productControllers.createProduct)

router.route("/:id")
.get(productControllers.getProduct)
.put(productControllers.updateProduct)
.delete(productControllers.deleteProduct)

module.exports = router