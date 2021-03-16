const { model, models, Schema } = require('mongoose')

const disciplineSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
}, {
    timestamps: true,
})

const Discipline = model('Discipline', disciplineSchema)

module.exports = Discipline