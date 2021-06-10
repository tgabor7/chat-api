const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const port = process.env.PORT || 4000

require('dotenv').config()

var chatAPIRouter = require('./routes/chatAPI')
var userAPIRouter = require('./routes/userAPI')

mongoose.connection.close()
mongoose.connect(process.env.MONGOPATH, {useNewUrlParser: true}).catch(error => console.log(error))

app.use(cors())
app.use(express.json());
app.use('/', express.static('./public'))
app.use('/chat', chatAPIRouter)
app.use('/user', userAPIRouter)

app.listen(port, ()=>{
	console.log('App listenning on port 4000')
})
