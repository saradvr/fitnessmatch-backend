const Coach = require('../models/coach.model')
const Specialization = require('../models/specialization.model')
const Discipline = require('../models/discipline.model')
const User = require('../models/user.model')

module.exports = {
  async update(req, res) {
    try {
      const { body, params: {coachId} } = req
      const coach = await Coach.findByIdAndUpdate( coachId, body, {new: true} )
      if(body.specializations){
        for (const specializationId of body.specializations){
          const specialization = await Specialization.findByIdAndUpdate(specializationId, {$push: {coachesId: coachId}}, {new: true})
        }
      }
      if(body.disciplines){
        for (const disciplineId of body.disciplines){
          console.log(disciplineId)
          const discipline = await Discipline.findByIdAndUpdate(disciplineId, {$push: {coachesId: coachId}}, {new: true})
        }
      }
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