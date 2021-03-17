const { model, models, Schema } = require('mongoose')

const disciplineSchema = new Schema({
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

const Discipline = model('Discipline', disciplineSchema)

module.exports = Discipline