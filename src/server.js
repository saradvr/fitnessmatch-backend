require("dotenv").config()
const express = require("express")
const cors = require('cors')
const morgan = require('morgan')
const {connect} = require("./db")
const clientRouter = require("./routes/client")
const userRouter =require('./routes/user')
const coachRouter = require('./routes/coach')
const metricRouter = require("./routes/metric")
const disciplineRouter = require("./routes/discipline")
const specializationRouter = require("./routes/specialization")
const appointmentRouter = require('./routes/appointment')

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
app.use("/disciplines", disciplineRouter)
app.use("/specializations", specializationRouter)
app.use('/appointments', appointmentRouter)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});