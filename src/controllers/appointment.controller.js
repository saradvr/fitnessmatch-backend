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
      res.status(201).json({ message: "Cita reservada con éxito", appointment })
    } catch(error) {
      res.status(400).json({ message: "Su cita no pudo crearse, intente nuevamente.", error })
    }
  },
  async getAppointment(req, res) {
    try {
      const { params: { appointmentId } } = req
      const appointment = await Appointment.findById(appointmentId)
      res.status(201).json({message: "Cita cargada con éxito", appointment})
    } catch (error) {
      res.status(400).json({message: "La cita no pudo cargarse", error})
    }
  },
  async updateAppointment(req,res) {
    try {
      const { body: {appointmentId, status} } = req
      const appointment = await Appointment.findByIdAndUpdate(appointmentId, status, {new: true})
      res.status(201).json({ message: "Cita actualizada con éxito", appointment })
    } catch (error) {
      res.status(400).json({ message: "Su cita no pudo actualizarse, intente nuevamente.", error })
    }
  },
  async deleteAppointment(req,res) {
    try {
      const { body: { appointmentId, coachId }, user: { userTypeId } } = req
      const appointment = await Appointment.findByIdAndDelete(appointmentId)
      const coach = await Coach.findByIdAndUpdate(coachId, {$push: { availableHours: appointment.appointmentDate }, $pull: { appointments: appointment._id }}, {new: true})
      const client = await Client.findByIdAndUpdate(userTypeId, {$pull: { appointments: appointment._id }}, {new: true})
      res.status(201).json({ message: "Cita eliminada con éxito", appointment, coach, client })
    } catch (error) {
      res.status(400).json({ message: "Su cita no pudo eliminarse, intente nuevamente.", error })
    }
  }
}