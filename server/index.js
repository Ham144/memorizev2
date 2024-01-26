import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import postRouter from './routes/Posts.js'


const app = express()
app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))
app.use(cors())

app.use('/post', postRouter)

const CONNECTION_URL = "mongodb+srv://hambebe:hambebe24434@cluster0.05oshon.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT, ()=> console.log(`Server is UP on ${PORT}`)))
.catch((err)=> console.log(`ERROR : ${err.message}`))

