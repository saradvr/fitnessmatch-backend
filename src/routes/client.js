const router = require("express").Router()
const { create, list } = require("../controllers/client.controller")

router.route("/").post(create)

module.exports = router
