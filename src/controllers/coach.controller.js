const Coach = require('../models/coach.model')
const Specialization = require('../models/specialization.model')
const Discipline = require('../models/discipline.model')
const User = require('../models/user.model')
const updateInterests = require('../utils/updateInterests')

module.exports = {
  async update(req, res) {
    try {
      const { body, params: {coachId} } = req
      const coach = await Coach.findByIdAndUpdate( coachId, body, {new: true} )

      await updateInterests(Specialization, body.specializations, 'coachesId', coachId)
      await updateInterests(Discipline, body.disciplines, 'coachesId', coachId)

      res.status(201).json({ message: 'Datos actualizados con éxito', coach})
    } catch (error) {
      res.status(400).json(`Error ${error}`)
    }
  },
  async list(req, res) {
    try {
      const {query} = req
      const coaches = await Coach.find(query)
      res.status(200).json(coaches)
    } catch(error) {
      res.status(500).json(error)
    }
  }
}