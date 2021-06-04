const express = require('express')
const router = express.Router()
const fs = require('fs')


//login
router.post('/login', (req, res)=>{	
	res.send('logged in')
})

//register
router.post('/register', (req, res)=>{
	res.send('Registered')
})

module.exports = router
