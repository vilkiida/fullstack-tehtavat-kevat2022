require('dotenv').config()
const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const mongoose = require('mongoose')
const logger = require('./utils/logger')


const mongoUrl = process.env.MONGODB_URI

mongoose.connect(mongoUrl)
    .then(result => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB', error.message)
    })

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)


module.exports = app