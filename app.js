const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 4000

var chatAPIRouter = require('./routes/chatAPI')

app.use(cors())

app.use('/', express.static('./public'))
app.use('/chat', chatAPIRouter)

app.listen(port, ()=>{
	console.log('App listenning on port 4000')
})
