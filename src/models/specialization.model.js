const { model, models, Schema } = require('mongoose')

const specializationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  coachId: [{
      type: Schema.Types.ObjectId,
      ref: 'Coach'
    },
  ],
  clientId: [{
      type: Schema.Types.ObjectId,
      ref: 'Client'
    },
  ],
}, {
    timestamps: true,
})

const Specialization = model('Specialization', specializationSchema)

module.exports = Specialization