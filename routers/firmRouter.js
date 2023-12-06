const router = require("express").Router()
const firmControllers = require("../controllers/firmControllers")

router.route("/")
.get(firmControllers.getFirms)
.post(firmControllers.createFirm)

router.route("/:id")
.get(firmControllers.getFirm)
.put(firmControllers.updateFirm)
.delete(firmControllers.deleteFirm)

module.exports = router