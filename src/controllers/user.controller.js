const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Coach = require('../models/coach.model')
const User = require('../models/user.model')

module.exports = {
  async signup(req, res){
    try {
      const { email, password, name, userType } = req.body
      const user = await User.create({email, password})
      if (userType === 'coach'){
        const coach = await Coach.create({name, profilePicture:"https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png", user:user._id})
        user.coachId = coach._id
        await user.save({ validateBeforeSave: false })
      }

      const token = jwt.sign(
        {userId: user._id},
        process.env.SECRET,
        {expiresIn: 60 * 60}
      )
      
      res.status(201).json({token})
    } catch(error ){
      res.status(400).json(`Error en el signup ${error}`)
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
        { userId: user._id},
        process.env.SECRET,
        { expiresIn: 60 * 60}
      )

      res.status(201).json({token})
    } catch(error) {
      res.status(401).json({message: error.message})
    }
  }
}
