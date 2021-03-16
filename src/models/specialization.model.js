const { model, models, Schema } = require('mongoose')

const specializationSchema = new Schema({
  name: {
    type: String,
    required: true,
    // validate: {
    //   async validator(value) {
    //     try {
    //       const specialization = await models.Specializations.findOne({ value })
    //       return !specialization
    //     } catch(err) {
    //       return false
    //     }
    //   },
    //   message: 'La especializacion ya existe.',
    // },
  }
}, {
    timestamps: true,
})

const Specialization = model('Specialization', specializationSchema)

module.exports = Specialization