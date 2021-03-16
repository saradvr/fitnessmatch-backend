require("dotenv").config()
const express = require("express")
const {connect} = require("./db")
const disciplineRouter = require("./routes/discipline")
const specializationRouter = require("./routes/specialization")
const userRouter =require('./routes/user')
const coachRouter = require('./routes/coach')
const { auth } = require('./utils/auth')

const port = process.env.PORT || 8000
const app = express()
connect()
app.use(express.json())
app.use("/disciplines", disciplineRouter)
app.use("/specializations", specializationRouter)

app.use('/users', userRouter)
app.use('/coaches', coachRouter)

app.get('/', auth, (req, res) => {
  const { user } = req
  res.send(`authenticated ${user}`)
})

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});