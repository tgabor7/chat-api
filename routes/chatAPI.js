const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/get', (req, res)=>{
	fs.readFile('messages.txt','utf-8', (err, data)=>{
		if(err){
			res.status(500).send('Error on server')
		}
		console.log(data)
		res.send(data)
	})
})

router.post('/post', (req,res)=>{
	fs.writeFile('messages.txt', req.data.msg, err=>{
		if(err){
			res.status(500).send('Error on server')
		}
	})
})
module.exports = router
