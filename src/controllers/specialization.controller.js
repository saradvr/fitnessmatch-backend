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
  }
}