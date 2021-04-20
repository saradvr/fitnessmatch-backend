const Appointment = require('../models/appointment.model')
const Client = require('../models/client.model')
const Coach = require('../models/coach.model')

module.exports = {
  async createAppointment(req, res) {
    try {
      const { body, user: { userTypeId } } = req
      const appointment = await Appointment.create(body)
      appointment.clientId = userTypeId
      await appointment.save({ validateBeforeSave: false })
      const client = await Client.findByIdAndUpdate(userTypeId, {$push: { appointments: appointment._id }}, {new: true})
      const coach = await Coach.findByIdAndUpdate(body.coachId, {$push: { appointments: appointment._id }}, {new: true})
      coach.availableHours = coach.availableHours.filter(item => item !== appointment.appointmentDate)
      await coach.save({ validateBeforeSave: false })
      res.status(201).json({ message: "Cita creada con éxito", appointment })
    } catch(error) {
      res.status(400).json({ message: "Su cita no pudo crearse, intente nuevamente.", error })
    }
  },
}