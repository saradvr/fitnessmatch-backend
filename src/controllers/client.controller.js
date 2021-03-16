const express = require("express")
const { get } = require("mongoose")
const Client = require("../models/client.model")


module.exports = {
  async create(req, res) {
    try {
      const {body} = req
      const client = await Client.create(body)
      
      res.status(201).json(client)
    } catch(error) {
        res.status(400).json(`Error en la creacion ${error}`)
    }
  },

  async list(req, res) {
    try {
      const {query} = req
      const client = await Client.find(query)
      
      res.status(201).json(client)
    } catch(error) {
        res.status(400).json(`No se puede encontrar el cliente ${error}`)
    }
  }

}
