const discussionService = require('../services/discussion.services');
const Discussion = require('../models/discussion.model');
const Post = require('../models/post.model');

exports.getDiscussionById = async (request, response, next) => {

    // Validation of request params
    try {
        // Pass control to DiscussionService
        const discussion = await discussionService.getDiscussionById(request.params.id);
        return response.status(200).json({ status: 200, data: discussion, message: "discussion.controller -> Successfully retrieved discussion by id"});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.getAllComments = async (request, response, next) => {
    try {
        // const comments = await discussionService.getAllComments(request.params.movieID);

        const discussions = await Discussion.find({ movieID: request.params.movieID });
        console.log(discussions)
        const comments = discussions.map(async (discussion) => {
            const comment = await Post.findById(discussion.post);
            return comment;
        });

        Promise.all(comments)
        .then((document) => {
            return response.status(200).json({ status: 200, data: document, message: "discussion.controller -> Successfully retrieved all comments"});
        });
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.createDiscussion = async (request, response, next) => {

    try {
        const discussion = await discussionService.createDiscussion(request.body);
        return response.status(200).json({ status: 200, data: discussion, message: "discussion.controller -> Successfully created discussion in db" });
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.deleteDiscussion = async (request, response, next) => {
    try{
        const discussion = await discussionService.deleteDiscussion(request.params.id);
        return response.status(200).json({status: 200, data: discussion, message: "discussion.controller -> Successfully deleted discussion"})
    } catch(error) {
        return response.status(400).json({status:400, message: error.message});
    }
}

exports.updateDiscussion = async (request, response, next) => {
    try{
        const discussion = await DiscussionService.updateDiscussion(request.params.id, request.body);
        return response.status(200).json({status: 200, data: discussion, message: "discussion.controller -> Successfully updated entry"})
    } catch(error) {
        return response.status(400).json({status: 400, message: error.message});
    }
}