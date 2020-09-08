const postService = require('../services/post.service');
exports.getPostById = async (request, response, next) => {

    // Validation of request params
    try {
        // Pass control to PostService
        const post = await postService.getPostById(request.params.id);
        return response.status(200).json({ status: 200, data: post, message: "post.controller -> Successfully retrieved post by id"});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.createPost = async (request, response, next) => {

    try {
        const post = await postService.createPost({ "user": request.user.username, "content": request.body.comment });
        return response.status(200).json({ status: 200, data: post, message: "post.controller -> Successfully created post in db" });
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.deletePost = async (request, response, next) => {
    try{
        const post = await postService.deletePost(request.params.id);
        return response.status(200).json({status: 200, data: post, message: "post.controller -> Successfully deleted post"})
    } catch(error) {
        return response.status(400).json({status:400, message: error.message});
    }
}

exports.updatePost = async (request, response, next) => {
    try{
        const post = await PostService.updatePost(request.params.id, request.body);
        return response.status(200).json({status: 200, data: post, message: "post.controller -> Successfully updated entry"})
    } catch(error) {
        return response.status(400).json({status: 400, message: error.message});
    }
}