const router = require("express").Router()
const { list, update, updatePicture } = require("../controllers/client.controller")
const { formData } = require("../utils/formData")
const { auth } = require("../utils/auth")


router.route("/").get(list)
router.route("/clientprofile/picture").put(auth, formData, updatePicture)
router.route("/clientprofile").put(auth, update)


module.exports = router
