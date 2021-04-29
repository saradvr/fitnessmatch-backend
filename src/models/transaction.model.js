const { model, models, Schema } = require('mongoose')

const transactionSchema = new Schema({
  transactionDate: {
    type: String,
    required: true,
  },
  appointmentId: {
    type: Schema.Types.ObjectId,
    ref: 'Appointment'
  },
  amountPaid: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  paymentReference: {
    type: String,
    required: true,
  }
}, {
    timestamps: true,
})

const Transaction = model('Transaction', transactionSchema)

module.exports = Transaction