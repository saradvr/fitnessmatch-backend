const { model, models, Schema } = require('mongoose')

const specializationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  coachesId: [{
      type: Schema.Types.ObjectId,
      ref: 'Coach'
    },
  ],
  clientsId: [{
      type: Schema.Types.ObjectId,
      ref: 'Client'
    },
  ],
}, {
    timestamps: true,
})

const Specialization = model('Specialization', specializationSchema)

module.exports = Specialization