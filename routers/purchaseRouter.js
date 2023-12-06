const router = require("express").Router()
const purchaseControllers = require("../controllers/purchaseControllers")

router.route("/")
.get(purchaseControllers.getPurchases)
.post(purchaseControllers.createPurchase)

router.route("/:id")
.get(purchaseControllers.getPurchase)
.put(purchaseControllers.updatePurchase)
.delete(purchaseControllers.deletePurchase)

module.exports = router