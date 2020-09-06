const mongoose = require('mongoose');

const postchema = new mongoose.Schema({

        user: { 
            type: String,
            required: true
        },
        content: {
            type: String, 
            required: true, //prevents empty messages 
        },
    }
);

postSchema.methods.info = () => {

    console.log(`USER -> ${this.user}`);
    console.log(`CONTENT -> ${this.content}`)
};


const post = mongoose.model('post', postSchema);
module.exports = post;
