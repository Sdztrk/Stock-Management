const router = require("express").Router()
const userControllers = require("../controllers/userControllers")

router.route("/")
.get(userControllers.getUsers)
.post(userControllers.createUser)

router.route("/:id")
.get(userControllers.getUser)
.put(userControllers.updateUser)
.delete(userControllers.deleteUser)

module.exports = router