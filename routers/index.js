const router = require("express").Router()

// URL/brands
router.use("/brands",require("./brandRouter"))
// URL/categories
router.use("/categories",require("./categoryRouter"))
// URL/firms
router.use("/firms",require("./firmRouter"))
// URL/products
router.use("/products",require("./productRouter"))
// URL/purchases
router.use("/purchases",require("./purchaseRouter"))
// URL/sales
router.use("/sales",require("./saleRouter"))
// URL/users
router.use("/users",require("./userRouter"))


module.exports = router;