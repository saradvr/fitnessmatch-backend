const router = require('express').Router()
const { list, update, setAvailability, getCoach } = require('../controllers/coach.controller')
const {auth} = require('../utils/auth')

router.route('/').get(auth, list)
router.route('/coach').get(auth, getCoach)
router.route('/profile').put(auth, update)
router.route('/profile/availability').put(auth, setAvailability)

module.exports = router