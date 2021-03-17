require("dotenv").config()
const express = require("express")
const cors = require('cors')
const morgan = require('morgan')
const {connect} = require("./db")
const clientRouter = require("./routes/client")
const userRouter =require('./routes/user')
const coachRouter = require('./routes/coach')
const metricRouter = require("./routes/metric")

const port = process.env.PORT
const app = express()
connect()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/users', userRouter)
app.use('/coaches', coachRouter)
app.use("/clients", clientRouter)
app.use("/metrics", metricRouter)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});