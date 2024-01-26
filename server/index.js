import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
app.get('/', (req,res) =>{
    res.send('<h1>hello</h1>')
})

app.listen(5000, ()=>console.log(`Uppp`))