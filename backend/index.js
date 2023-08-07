const express = require('express')
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const cors = require("cors");
const cookieParser = require('cookie-parser')
dotenv.config();

app.use(cors('*'));
  
app.use(cookieParser())

const authRouter = require("./routes/auth")
const alertRouter = require('./routes/Alert')


mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection created successfully"))
    .catch((err) => console.log(`Db Connection Error ${err}`))

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/alert', alertRouter)


app.get('/', async (req, res) => {
    res.status(200).send({ "mesg": 1 })
})


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Backend is running on ${port}`)
})