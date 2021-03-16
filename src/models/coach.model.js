const { model, models, Schema } = require('mongoose')

const coachSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref:'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  description: {
    type: String,
  },
  experienceYears: {
    type: Number,
  },
  appointmentFee: {
    type: Number,
  },
  socialMediaLinks: {
    type: [{ type: String }]
  },
  uploadedFiles: {
    type: [{ type: String }]
  }
},{
  timestamps: true,
})

const Coach = model('Coach', coachSchema)

module.exports = Coach