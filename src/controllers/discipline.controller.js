const Discipline = require('../models/discipline.model')

module.exports = {
  async createDiscipline(req, res) {
    try {
      const { body } = req
      const discipline = await Discipline.create(body)

      res.status(201).json({ discipline })
    } catch(error) {
      res.status(400).json({ error })
    }
  }
}