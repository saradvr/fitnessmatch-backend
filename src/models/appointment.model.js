const { model, models, Schema } = require('mongoose')

const appointmentSchema = new Schema({
  appointmentDate: {
    type: String,
    required: true,
  },
  coachId: {
    type: Schema.Types.ObjectId,
    ref: 'Coach',
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Client'
  },
  status: {
    type: String,
    required: true,
  }
}, {
    timestamps: true,
})

const Appointment = model('Appointment', appointmentSchema)

module.exports = Appointment