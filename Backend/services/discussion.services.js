const discussion = require('../models/discussion.model');

exports.getDiscussionById = async (id) => {
    try {
        const discussion = await discussion.findById(id);
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
            throw Error('discussion.service.js -> Error deleting movie');
        }
};

exports.updateMovie = async (id, movie) => {
    try {
        movie._id = id;

        let updatedMovie = await Movie.findByIdAndUpdate(id, { $set: { "title": movie.title, "year": movie.year, "description": movie.description, 
        "actors": movie.actors, "director": movie.director, "imdb": movie.imdb } }, { new: true });

        console.log(updatedMovie);
        return updatedMovie;
    } catch(error) {
        console.log(error);
        throw Error('movie.service.js -> Error updating movie');
    }
}
