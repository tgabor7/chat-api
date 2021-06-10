const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const MessageModel = require('../models/MessageModel')

router.get('/get/:sender/:receiver', async (req, res)=>{
	try{
		const messages = await MessageModel.find({"$or":[{sender: req.params.sender, receiver: req.params.receiver},{sender: req.params.receiver, receiver: req.params.sender}]})
		res.json(messages)
	}catch(err){
		console.log(err)
		res.json(err)
	}	
})

router.post('/post', async (req,res)=>{
	const message = new MessageModel({
		message: req.body.message,
		sender: req.body.sender,
		receiver: req.body.receiver
	})
	let data = await message.save()
	res.json(data)
})
module.exports = router
