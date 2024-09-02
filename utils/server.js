const express = require('express') const morgan = require('morgan')

const bodyParser = require('body-parser')

const cors require('cors')

const dotanv = require('dotenv')

require('colors')

//rest object

const app express()

//middlwares

app.use(cors())

app.use(express.json())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))

app.use(morgan("dev"))

jghjgjghjghjghjghjghjghj