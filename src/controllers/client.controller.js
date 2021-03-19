const Client = require("../models/client.model")
const Specialization = require('../models/specialization.model')
const Discipline = require('../models/discipline.model')


module.exports = {
  async list(req, res) {
    try {
      const {query} = req
      const client = await Client.find(query)
      
      res.status(201).json(client)
    } catch(error) {
        res.status(400).json(`No se puede encontrar el cliente ${error}`)
    }
  },
  async update(req, res) {
    try{
      const {body, params:{clientId}} = req
      const client = await Client.findByIdAndUpdate(clientId, body, {new:true})
      if(body.specializations){
        for (const specializationId of body.specializations){
          const specialization = await Specialization.findByIdAndUpdate(specializationId, {$push: {clientsId: clientId}}, {new: true})
        }
      }
      if(body.disciplines){
        for (const disciplineId of body.disciplines){
          const discipline = await Discipline.findByIdAndUpdate(disciplineId, {$push: {clientsId: clientId}}, {new: true})
        }
      }
      res.status(201).json(client)
    }catch(error) {
      res.status(400).json(`No se puede actualizar el cliente ${error}`)
    }
  },
}
