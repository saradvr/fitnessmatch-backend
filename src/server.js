require("dotenv").config()
const express = require("express")
const {connect} = require("./db")
const disciplineRouter = require("./routes/discipline")
const specializationRouter = require("./routes/specialization")

const port = process.env.PORT || 8000
const app = express()
connect()
app.use(express.json())
app.use("/disciplines", disciplineRouter)
app.use("/specializations", specializationRouter)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});