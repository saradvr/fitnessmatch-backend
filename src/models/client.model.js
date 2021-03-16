const {model, models, Schema } = require("mongoose")

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
},
{
  timestamps: true,
})

const Client = model("Client", clientSchema)

module.exports = Client;