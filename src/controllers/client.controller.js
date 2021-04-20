const Client = require("../models/client.model")
const Specialization = require('../models/specialization.model')
const Discipline = require('../models/discipline.model')
const Metric = require('../models/metric.model')
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
      const {body, user: {userTypeId}} = req
 
      const client = await Client.findByIdAndUpdate(userTypeId, body, {new:true})
      const metric = await Metric.findByIdAndUpdate(client.metric._id, body, {new:true})
      console.log(metric)
      await updateInterests(Specialization, body.specializations, 'clientsId', userTypeId)
      await updateInterests(Discipline, body.disciplines, 'clientsId', userTypeId)
      
      res.status(201).json(client)
    }catch(error) {
      res.status(400).json(`No se puede actualizar el cliente ${error}`)
    }
  },
  async updatePicture(req, res)  {
    try {
      const {body, user: {userTypeId}} = req

      const client = await Client.findByIdAndUpdate(userTypeId, body, {new:true})

      res.status(201).json(client)
    }catch(error) {
      res.status(400).json('No se pudo actualizar la foto')
    }
  }
}
