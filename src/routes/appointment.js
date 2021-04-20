const router = require('express').Router()
const { createAppointment } = require('../controllers/appointment.controller')
const {auth} = require('../utils/auth')

router.route('/').post(auth, createAppointment)

module.exports = router