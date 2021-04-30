const router = require("express").Router()
const { list, update, updatePicture, getClient, getPublicClient } = require("../controllers/client.controller")
const { formData } = require("../utils/formData")
const { auth } = require("../utils/auth")


router.route("/").get(list)
router.route("/client").get(auth, getClient)
router.route("/clientprofile/picture").put(auth, formData, updatePicture)
router.route("/clientprofile").put(auth, update)
router.route("/client/:clientId").get(auth, getPublicClient)


module.exports = router
