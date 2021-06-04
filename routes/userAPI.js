const express = require('express')
const router = express.Router()
const fs = require('fs')
const mongoose = require('mongoose')


//login
router.post('/login', (req, res)=>{
	mongoose.connect(process.env.MONGOPATH, {useNewUrlParser: true})
	res.send('logged in')
	mongoose.connection.close()
})

//register
router.post('/register', (req, res)=>{

	mongoose.connect(process.env.MongoPATH, {useNewUrlParser: true})
	res.send('Registered')
	mongoose.connection.close()
})

module.exports = router
