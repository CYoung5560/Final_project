const mongoose = require('mongoose'); 

const timesSchema = new mongoose.Schema({

    year: {type: Number, required: true},
    month: {type: Number, required: true},
    day: {type: Number, required: true},
    time: {type: Number, required: true},

})

timesSchema.methods.info = () => {
    console.log(`YEAR -> ${this.year}`);
	console.log(`MONTH -> ${this.month}`);
	console.log(`DAY -> ${this.day}`);
	console.log(`TIME -> ${this.time}`); 
}

const times = mongoose.model('times', timesSchema); 
module.exports = times;
