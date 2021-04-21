const router = require("express").Router()
const { list, update } = require("../controllers/client.controller")
const { formData } = require("../utils/formData")
const { auth } = require("../utils/auth")


router.route("/").get(list)
router.route("/clientprofile").put(auth, formData, update)

module.exports = router
