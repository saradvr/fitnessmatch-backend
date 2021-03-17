const {model, models, Schema} = require('mongoose')

const metricSchema = new Schema({
  weight: { 
    type: Number,
  },
  height: {
    type: Number,
  },
  bmi: {
    type: Number,
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Client'
  }
},
{
  timestamps: true,
})

const Metric = model('Metric', metricSchema)

module.exports = Metric