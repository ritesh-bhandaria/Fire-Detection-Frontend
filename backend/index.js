const express = require('express')
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const cors = require("cors");
dotenv.config();

app.use(cors('*'))
// app.use(cors({
//     origin: 'https://netflix-video-stream.vercel.app',
//     methods:"GET,POST,PUT,DELETE",
//     credentials: true
// }));

const authRouter = require("./routes/auth")
// const userRoute = require('./routes/users')
// const movieRoute = require('./routes/movies')
// const webRoute = require('./routes/webSeries')
// const listRoute = require('./routes/list')
// const googleAuthRoute = require('./routes/googleAuth')


mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection created successfully"))
    .catch((err) => console.log(`Db Connection Error ${err}`))

app.use(express.json())

app.use('/api/auth', authRouter)


app.get('/', async (req, res) => {
    res.status(200).send({ "mesg": 1 })
})


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Backend is running on ${port}`)
})