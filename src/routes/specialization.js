const router = require('express').Router()
const { createSpecialization, update } = require('../controllers/specialization.controller')

router.route('/createSpecialization').post(createSpecialization)
router.route('/:specializationId').put(update)

module.exports = router