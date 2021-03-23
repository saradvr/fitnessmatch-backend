const router = require('express').Router()
const { list, update } = require('../controllers/coach.controller')
const {auth} = require('../utils/auth')

router.route('/').get(list)
router.route('/:coachId').put(update)

module.exports = router