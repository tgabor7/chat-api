const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const MessageModel = require('../models/MessageModel')

router.get('/get/:sender/:receiver', async (req, res)=>{
	mongoose.connect(process.env.MONGOPATH, {useNewUrlParser: true}).catch(error => console.log(error))
	try{
		const messages = await MessageModel.find({"$or":[{sender: req.params.sender, receiver: req.params.receiver},{sender: req.params.receiver, receiver: req.params.sender}]})
		res.json(messages)
		console.log(messages)
		mongoose.connection.close()
	}catch(err){
		console.log(err)
		res.json(err)
		mongoose.connection.close()
	}
})

router.post('/post', (req,res)=>{
	mongoose.connect(process.env.MONGOPATH, {useNewUrlParser: true}).catch(error => console.log(error))
	const message = new MessageModel({
		message: req.body.message,
		sender: req.body.sender,
		receiver: req.body.receiver
	})
	message.save().then(data=>{
		res.json(data)
		mongoose.connection.close()
	}).catch(err => {
		console.log(err)
		mongoose.connection.close()	
	})
	
})
module.exports = router
