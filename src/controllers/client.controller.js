const express = require("express")
const { get } = require("mongoose")
const { update } = require("../models/client.model")
const Client = require("../models/client.model")


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

      res.status(201).json(client)
    }catch(error) {
      res.status(400).json(`No se puede actualizar el cliente ${error}`)
    }
  },
}
