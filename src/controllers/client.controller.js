const Client = require("../models/client.model")
const Specialization = require('../models/specialization.model')
const Discipline = require('../models/discipline.model')
const updateInterests = require('../utils/updateInterests')

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
      
      await updateInterests(Specialization, body.specializations, 'clientsId', clientId)
      await updateInterests(Discipline, body.disciplines, 'clientsId', clientId)
      
      res.status(201).json(client)
    }catch(error) {
      res.status(400).json(`No se puede actualizar el cliente ${error}`)
    }
  },
}
