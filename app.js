const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req,res)=>{
	res.send('Hi')
})

app.static("/public", "/public")

app.listen(port, ()=>{
	console.log('App listenning on port 3000')
})
