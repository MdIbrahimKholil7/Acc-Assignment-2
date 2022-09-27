require('dotenv').config()
const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000
const colors = require('colors');
const db = require('./database/db');
app.use(cors())
app.use(express.json())
const tourRoute=require('./routes/tourRoute.js')
// connect database 
db()

app.use('/api/v1/tour',tourRoute)


app.get('/', async (req, res) => {
    res.json({
        message:"Server is running"
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`.red.bold)
})
