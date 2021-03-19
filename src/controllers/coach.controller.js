const Coach = require('../models/coach.model')
const User = require('../models/user.model')

module.exports = {
  async update(req, res) {
    try {
      const { body, params: {coachId} } = req
      const coach = await Coach.findByIdAndUpdate( coachId, body, {new: true} )
      res.status(201).json({ message: 'Datos actualizados con éxito', coach})
    } catch (error) {
      res.status(400).json({ message: 'No se pudo actualizar los datos', error})
    }
  },
  async list(req, res) {
    try {
      const {query: {minFee, maxFee}} = req
      const coaches = await Coach.find({ 
        appointmentFee: { $gte: minFee, $lte: maxFee }
      })
      res.status(200).json(coaches)
    } catch(error) {
      res.status(500).json(error)
    }
  }
}