require("dotenv").config()
const express = require("express")
const {connect} = require("./db")
const clientRouter = require("./routes/client")

const port = process.env.PORT || 8010
const app = express()
connect()

app.use(express.json())

app.use("/clients", clientRouter)
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});