const express = require("express")
const Metric = require("../models/metric.model")

module.exports = {
   async update(req, res) {
     try {
      const {body:{weight, height}, params:{metricId}} = req
      const metric = await Metric.findByIdAndUpdate(metricId, body, {new: true})
      metric.bmi = weight/(height**2)
      await metric.save({validateBeforeSave: false})

      res.status(201).json(metric)
    } catch(error) {
      res.status(400).json(`Error en la creación de la métrica ${error}`)
     }
  },
}
