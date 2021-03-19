const { model, models, Schema } = require('mongoose')

const disciplineSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  coachesId: {
    type: [{type: Schema.Types.ObjectId, ref: 'Coach'}]
  },
  clientsId: [{
      type: Schema.Types.ObjectId,
      ref: 'Client'
    },
  ],
}, {
    timestamps: true,
})

const Discipline = model('Discipline', disciplineSchema)

module.exports = Discipline