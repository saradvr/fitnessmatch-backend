require("dotenv").config()
const express = require("express")
const {connect} = require("./db")
const clientRouter = require("./routes/client")
const userRouter =require('./routes/user')
const coachRouter = require('./routes/coach')
const { auth } = require('./utils/auth')

const port = process.env.PORT || 8010
const app = express()
connect()

app.use(express.json())
app.use('/users', userRouter)
app.use('/coaches', coachRouter)

app.get('/', auth, (req, res) => {
  const { user } = req
  res.send(`authenticated ${user}`)
})

app.use("/clients", clientRouter)
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});