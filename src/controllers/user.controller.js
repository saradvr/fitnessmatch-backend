const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Coach = require('../models/coach.model')
const User = require('../models/user.model')
const Client = require('../models/client.model')
const Metric = require('../models/metric.model')

module.exports = {
  async signup(req, res){
    try {
      const { email, password, name, userType } = req.body
      const user = await User.create({email, password})
      if (userType === 'coach'){
        const coach = await Coach.create({name, profilePicture:"https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png", user:user._id})
        user.coachId = coach._id
        await user.save({ validateBeforeSave: false })
      } else if(userType === 'client'){
        const metric = await Metric.create({height:0, weight:0})
        const client = await Client.create({name, profilePicture:"https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png", user:user._id, metric:metric._id})
        user.clientId = client._id
        await user.save({ validateBeforeSave: false})
        metric.clientId = client._id
        await metric.save({validateBeforeSave: false})
      } else {
        throw Error(`Tipo de usuario incorrecto`)
      }

      const token = jwt.sign(
        {
          userId: user._id,
          userTypeId: user.coachId ? user.coachId : user.clientId,
          userType: user.coachId ? 'coach' : 'client' 
        },
        process.env.SECRET,
        {expiresIn: 60 * 60}
      )
      
      res.status(201).json({token})
    } catch(error ){
      res.status(400).json({error})
    }
  },
  async signin(req, res){
    try {
      const { email, password } = req.body

      const user = await User.findOne({email})

      if(!user){
        throw Error('Usuario o contraseña invalido')
      }

      const isValid = await bcrypt.compare(password, user.password)

      if(!isValid){
        throw Error('Usuario o contraseña invalido')
      }

      const token = jwt.sign(
        {
          userId: user._id,
          userTypeId: user.coachId ? user.coachId : user.clientId,
          userType: user.coachId ? 'coach' : 'client' 
        },
        process.env.SECRET,
        { expiresIn: 60 * 60}
      )

      const userKind = user.coachId ? 'coach' : 'client' 
      res.status(201).json({token, userKind})
    } catch(error) {
      res.status(401).json({message: error.message})
    }
  }
}
