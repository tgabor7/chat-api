const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    message: String,
    sender: String,
    receiver: String    
})

module.exports = mongoose.model('messages', MessageSchema)