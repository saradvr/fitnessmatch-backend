const router = require('express').Router()
const { createSpecialization } = require('../controllers/specialization.controller')

router.route('/createSpecialization').post(createSpecialization)

module.exports = router