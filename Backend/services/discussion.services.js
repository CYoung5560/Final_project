const discussion = require('../models/discussion.model');

exports.getDiscussionById = async (id) => {
    try {
        // const discussion = await discussion.findById(id);
        const discussion = await discussion.findOne({ movieID: id });
        return discussion;
    } catch(error) {
        throw Error('Discussion.service.js -> Error finding discussion by id');
    }
};

exports.createDiscussion = async (discussion) => {
    console.log(discussion); //test
    try {
        const newDiscussion = await discussion.create({ "movieID": discussion.movieID, "post": discussion.post});
        console.log(newDiscussion);
        return newDiscussion;
    } catch(error) {
        console.log(error);
        throw Error('discussion.service.js -> Error creating discussion');
    }
};

exports.deleteDiscussion = async (id) => {
        try {
            await discussion.findByIdAndDelete(id); 
        } catch(error) {
            console.log(error);
            throw Error('discussion.service.js -> Error deleting discussion');
        }
};

exports.updateDiscussion = async (id, discussion) => {
    try {
        discussion._id = id;

        let updatedDiscussion = await discussion.findByIdAndUpdate(id, { $set: { "movieID": discussion.movieID, 
        "post" : discussion.post } }, { new: true });

        console.log(updatedDiscussion);
        return updatedDiscussion;
    } catch(error) {
        console.log(error);
        throw Error('discussion.service.js -> Error updating discussion');
    }
}
