const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


router.get('/', async (req, res)=>{
	mongoose.connect(process.env.MONGOPATH, {useNewUrlParser: true}).catch(error => console.log(error))
    
    const users = await UserModel.find().select('name')
    res.send(users)
    mongoose.connection.close()

})

router.get('/validateUser/:user', async (req, res)=>{
	mongoose.connect(process.env.MONGOPATH, {useNewUrlParser: true}).catch(error => console.log(error))

    const users = await UserModel.find({name: req.params.user})
    if(users.length > 0) {
        res.send("Username taken!")
    }else{
        res.send("ok")
    }
    mongoose.connection.close()

})
//login
router.post('/login', async (req, res)=>{
	mongoose.connect(process.env.MONGOPATH, {useNewUrlParser: true}).catch(error => console.log(error))
    try{
        const user = await UserModel.find({name: req.body.name})
        if(user.length === 0){
            res.send("User not found")
            return
        }
        const validPass = await bcrypt.compare(req.body.password, user[0].password)
        if(validPass){
            const token = jwt.sign({_id: user[0]._id, role: user[0].role, name: user[0].name}, process.env.TOKEN_SECRET)
            res.header('auth-token', token).send(token)
        }else{
            res.send("Failed to login!")
        }
    }catch(err){
        res.json(err)
        mongoose.connection.close()

    }
    mongoose.connection.close()
})

//register
router.post('/register', async (req, res)=>{

	mongoose.connect(process.env.MONGOPATH, {useNewUrlParser: true}).catch(error => console.log(error))
	const tmp = await UserModel.find({name: req.body.name})
    if(tmp.length > 0){
        res.send("Username taken")
        mongoose.connection.close()
        return
    }
    bcrypt.hash(req.body.password, 1, function(err, hash) {
        const user = new UserModel({
            name: req.body.name,
            password: hash,
            role: "User"
            
        });
        user.save().then(data => {
            res.json("ok");
            mongoose.connection.close()
        })
        .catch(err => {
            console.log(err);
            mongoose.connection.close()
        });
    });
})

module.exports = router
