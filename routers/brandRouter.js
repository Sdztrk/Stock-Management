 const router = require("express").Router()
const brandControllers = require("../controllers/brandControllers")

router.route("/")
.get(brandControllers.getBrands)
.post(brandControllers.createBrand)

router.route("/:id")
.get(brandControllers.getBrand)
.put(brandControllers.updateBrand)
.delete(brandControllers.deleteBrand)

module.exports = router