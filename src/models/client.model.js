const {model, Schema } = require("mongoose")

const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId, 
    ref: "User",
    required: true,
  },
  profilePicture: {
    type: String,
  },
  appointments: {
    type: Array,
  },
  metric: {
    type: Schema.Types.ObjectId,
    ref: "Metric"
  },
  specializations: {
    type: [{ 
      type: Schema.Types.ObjectId,
      ref:'Specialization',
    }]
  },
  disciplines: {
    type: [{ 
      type: Schema.Types.ObjectId,
      ref:'Discipline',
    }]
  },
},
{
  timestamps: true,
})

const Client = model("Client", clientSchema)

module.exports = Client;