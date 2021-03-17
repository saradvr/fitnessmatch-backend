const router = require("express").Router()
const { update } = require("../controllers/metric.controller")

router.route("/:metricId").put(update)

module.exports = router