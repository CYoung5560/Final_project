const mongoose = require('mongoose');


const imageSchema = new mongoose.Schema({
    name: String, //alt tag in the frontend 
    img: {
        data: Buffer, 
        contentType: String, 
    }
})

module.exports = new mongoose.model('Image', imageSchema);