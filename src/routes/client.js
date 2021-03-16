const router = require("express").Router()
const { list, update } = require("../controllers/client.controller")

router.route("/").get(list)
router.route("/:clientId").put(update)

module.exports = router
