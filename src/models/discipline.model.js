const { model, models, Schema } = require('mongoose')

const disciplineSchema = new Schema({
  name: {
    type: String,
    required: true,
    // validate: {
    //   async validator(value) {
    //     try {
    //       const discipline = await models.Disciplines.findOne({ value })
    //       return !discipline
    //     } catch(err) {
    //       return false
    //     }
    //   },
    //   message: 'La disciplina ya existe.',
    // },
  }
}, {
    timestamps: true,
})

const Discipline = model('Discipline', disciplineSchema)

module.exports = Discipline