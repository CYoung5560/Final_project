const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const discussionSchema = new mongoose.Schema({

    movieID: { //movieID to match discussion board with page entry 
        type: String,
        required: true,
        // unique: true
    },
    post: { type: mongoose.Types.ObjectId, ref: 'post'}
});

discussionSchema.methods.info = () => {

    console.log(`MOVIEID -> ${this.movieID}`);
    console.log(`POST -> ${this.post}`)
};

discussionSchema.plugin(uniqueValidator);

const discussion = mongoose.model('discussion', discussionSchema);
module.exports = discussion;
