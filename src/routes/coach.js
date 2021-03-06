const router = require('express').Router()
const { list, update, updateFiles, deleteFiles, setAvailability, getCoach, getPublicCoach, updatePicture } = require('../controllers/coach.controller')
const {auth} = require('../utils/auth')
const { formData} = require('../utils/formData')

router.route('/').get(auth, list)
router.route('/coach').get(auth, getCoach)
router.route('/profile').put(auth, update)
router.route('/profile/picture').put(auth, formData, updatePicture)
router.route('/profile/files').put(auth, updateFiles)
router.route('/profile/deletefiles').put(auth, deleteFiles)
router.route('/coach/:coachId').get(auth, getPublicCoach)

module.exports = router