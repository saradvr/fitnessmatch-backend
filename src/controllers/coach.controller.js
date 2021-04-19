const Coach = require('../models/coach.model')
const Specialization = require('../models/specialization.model')
const Discipline = require('../models/discipline.model')
const User = require('../models/user.model')
const updateInterests = require('../utils/updateInterests')

module.exports = {
  async update(req, res) {
    try {
      const { body, user: {userTypeId} } = req
      const coach = await Coach
      .findByIdAndUpdate( 
        userTypeId, 
        body, 
        {new: true} 
      )
      .populate({
        path: 'specializations',
        select: 'name'
      })
      .populate({
        path: 'disciplines',
        select: 'name'
      })

      await updateInterests(Specialization, body.specializations, 'coachesId', userTypeId)
      await updateInterests(Discipline, body.disciplines, 'coachesId', userTypeId)

      res.status(201).json({ message: 'Datos actualizados con éxito', coach})
    } catch (error) {
      res.status(400).json({message: 'No se pudo actualizar el entrenador', error})
    }
  },
  async setAvailability(req, res){
    try{
      const { body, user:{ userTypeId } } = req
      const coach = await Coach.findByIdAndUpdate( userTypeId, body, {new: true} )
      res.status(201).json({ message: 'Guardado con éxito', coach})
    } catch (error) {
      res.status(400).json({message: 'No se pudo guardar la disponibilidad', error})
    }
  },
  async getCoach(req, res){
    try {
      const { user: {userTypeId} } = req
      const coach = await Coach.findById(userTypeId) 
      res.status(201).json({message: 'Entrenador cargado con éxito', coach})
    } catch (error) {
      res.status(400).json({message: 'No se pudo obtener los datos del entrenador', error})
    }
  },
  async list(req, res) {
    try {
      const { query: {minFee, maxFee, checkDisciplines, checkSpecializations} } = req
      let filters = {}

      if(minFee || maxFee){
        filters.appointmentFee = { $gte: minFee, $lte: maxFee }
      }
      if(checkSpecializations){
        filters.specializations = { $in: checkSpecializations }
      }
      if(checkDisciplines){
        filters.disciplines = { $in: checkDisciplines }
      }

      const coaches = await Coach
        .find(filters)
        .populate({
          path: 'specializations',
          select: 'name'
        })
        .populate({
          path: 'disciplines',
          select: 'name'
        })

      res.status(200).json(coaches)
    } catch(error) {
      res.status(500).json(`El error es ${error}`)
    }
  }
}
