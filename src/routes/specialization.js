const router = require('express').Router()
const { createSpecialization, update, list } = require('../controllers/specialization.controller')

router.route('/createSpecialization').post(createSpecialization)
router.route('/:specializationId').put(update)
router.route('/').get(list)

module.exports = router