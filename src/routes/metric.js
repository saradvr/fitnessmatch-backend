const router = require("express").Router()
const { update } = require("../controllers/metric.controller")

router.route("/:clientId").put(update)

module.exports = router