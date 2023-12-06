const router = require("express").Router()
const categoryControllers = require("../controllers/categoryControllers")

router.route("/")
.get(categoryControllers.getCategories)
.post(categoryControllers.createCategory)

router.route("/:id")
.get(categoryControllers.getCategory)
.put(categoryControllers.updateCategory)
.delete(categoryControllers.deleteCategory)

module.exports = router