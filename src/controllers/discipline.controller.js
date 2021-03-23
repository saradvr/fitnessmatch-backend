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
  },
  async update(req, res) {
    try {
      const { body, params: {disciplineId} } = req
      const discipline = await Discipline.findByIdAndUpdate( disciplineId, {$push: {coachesId: body.coachId}}, {new: true} )
      res.status(201).json({ message: 'Disciplina actualizada con éxito', discipline})
    } catch (error) {
      res.status(400).json({ message: 'No se pudo actualizar la disciplina', error})
    }
  }
}