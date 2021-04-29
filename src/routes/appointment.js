const router = require('express').Router()
const { createAppointment, updateAppointment, deleteAppointment, getAppointment } = require('../controllers/appointment.controller')
const {auth} = require('../utils/auth')

router.route('/').post(auth, createAppointment)
router.route('/get/:appointmentId').get(auth, getAppointment)
router.route('/update').put(auth, updateAppointment)
router.route('/delete').delete(auth, deleteAppointment)

module.exports = router