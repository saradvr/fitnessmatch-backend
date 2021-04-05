const router = require('express').Router()
const { list, update } = require('../controllers/coach.controller')
const {auth} = require('../utils/auth')

router.route('/').get(auth, list)
router.route('/:coachId').put(auth, update)

module.exports = router