const Transaction = require("../models/transaction.model")


module.exports = {
  async createTransaction(req, res) {
    try {
      const { body, user: { userTypeId } } = req
      let transaction = await Transaction.findOne({paymentReference: body.paymentReference})
      if(!transaction) {
        transaction = await Transaction.create(body)
      }
      res.status(201).json({ message: "Transacción guardada con éxito", transaction })
    } catch(error) {
      console.log(error)
      res.status(400).json({ message: "La transacción no se pudo guardar, intente nuevamente.", error })
    }
  },
}