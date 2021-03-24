const Specialization = require('../models/specialization.model')

module.exports = {
  async createSpecialization(req, res) {
    try {
      const { body } = req
      const specialization = await Specialization.create(body)

      res.status(201).json({ specialization })
    } catch(error) {
      res.status(400).json({ error })
    }
  },
  async update(req, res) {
    try {
      const { body, params: {specializationId} } = req
      const specialization = await Specialization.findByIdAndUpdate( specializationId, {$push: {coachesId: body.coachId}}, {new: true} )
      res.status(201).json({ message: 'Especializacion actualizada con éxito', specialization})
    } catch (error) {
      res.status(400).json({ message: 'No se pudo actualizar la especializacion', error})
    }
  },
  async list(req, res) {
    try {
      const {query} = req
      const specializations = await Specialization.find(query)
      res.status(200).json(specializations)
    } catch(error) {
      res.status(500).json(error)
    }
  }
}