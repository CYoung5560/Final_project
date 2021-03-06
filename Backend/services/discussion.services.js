const Discussion = require('../models/discussion.model');
const Post = require('../models/post.model');

exports.getDiscussionById = async (id) => {
    try {
        // const discussion = await discussion.findById(id);
        const discussion = await Discussion.findOne({ movieID: id });
        return discussion;
    } catch (error) {
        throw Error('Discussion.service.js -> Error finding discussion by id');
    }
};

exports.getAllComments = async (id) => {
    try {
        const discussions = await Discussion.find({ movieID: id });
        console.log(discussions)
        const comments = discussions.map(async (discussion) => {
            const comment = await Post.findById(discussion.post);
            return comment;
        });
        return comments;
        // return discussions;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.createDiscussion = async (discussion) => {
    console.log(discussion); //test
    try {
        const newDiscussion = await Discussion.create(discussion);
        console.log(newDiscussion);
        return newDiscussion;
    } catch (error) {
        console.log(error);
        throw Error('discussion.service.js -> Error creating discussion');
    }
};

exports.deleteDiscussion = async (id) => {
    try {
        await Discussion.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
        throw Error('discussion.service.js -> Error deleting discussion');
    }
};

exports.updateDiscussion = async (id, discussion) => {
    try {
        discussion._id = id;

        let updatedDiscussion = await Discussion.findByIdAndUpdate(id, {
            $set: {
                "movieID": discussion.movieID,
                "post": discussion.post
            }
        }, { new: true });

        console.log(updatedDiscussion);
        return updatedDiscussion;
    } catch (error) {
        console.log(error);
        throw Error('discussion.service.js -> Error updating discussion');
    }
}
