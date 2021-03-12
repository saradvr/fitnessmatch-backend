require("dotenv").config()
const express = require("express")
const {connect} = require("./db")

const port = process.env.PORT || 8000
const app = express()
connect()
app.use(express.json())


app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
});