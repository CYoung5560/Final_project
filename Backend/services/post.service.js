const Post = require('../models/post.model');

exports.getPostById = async (id) => {
    try {
        const post = await post.findById(id);
        return post;
    } catch(error) {
        throw Error('post.service.js -> Error finding post by id');
    }
};

exports.createPost = async (post) => {
    console.log(post); //test
    try {
        const newPost = await Post.create(post);
        console.log(newPost);
        return newPost;
    } catch(error) {
        console.log(error);
        throw Error('Post.service.js -> Error creating Post');
    }
};

exports.deletePost = async (id) => {
        try {
            await post.findByIdAndDelete(id); 
        } catch(error) {
            console.log(error);
            throw Error('post.service.js -> Error deleting post');
        }
};

exports.updatePost = async (id, post) => {
    try {
        post._id = id;

        let updatedPost = await post.findByIdAndUpdate(id, { "user": post.user, "content" : post.content}, 
        { new: true });

        console.log(updatedPost);
        return updatedPost;
    } catch(error) {
        console.log(error);
        throw Error('Post.service.js -> Error updating Post');
    }
}
