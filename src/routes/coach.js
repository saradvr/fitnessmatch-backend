const router = require('express').Router()
const { list, update } = require('../controllers/coach.controller')

router.route('/').get(list)
router.route('/:coachId').put(update)

module.exports = router