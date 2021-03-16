const { model, models, Schema } = require('mongoose')

const specializationSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
}, {
    timestamps: true,
})

const Specialization = model('Specialization', specializationSchema)

module.exports = Specialization