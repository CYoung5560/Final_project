const discussionService = require('../services/discussion.service');

exports.getDiscussioneById = async (request, response, next) => {

    // Validation of request params
    try {
        // Pass control to MovieService
        const discussion = await discussionService.getDiscussionById(request.params.id);
        return response.status(200).json({ status: 200, data: discussion, message: "discussion.controller -> Successfully retrieved discussion by id"});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.createDiscussion = async (request, response, next) => {

    try {
        const discussion = await discussionService.createDiscussion(request.body);
        return response.status(200).json({ status: 200, data: movie, message: "discussion.controller -> Successfully created discussion in db" });
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

exports.updateMovie = async (request, response, next) => {
    try{
        const movie = await MovieService.updateMovie(request.params.id, request.body);
        return response.status(200).json({status: 200, data: movie, message: "movie.controller -> Successfully updated entry"})
    } catch(error) {
        return response.status(400).json({status: 400, message: error.message});
    }
}