const Time = require('../models/time.model');

exports.getTimeById = async (id) => {
    try {
        const time = await Time.findById(id);
        return time;
    } catch(error) {
        throw Error('Time.service.js -> Error finding Time by id');
    }
};

exports.create = async (time) => {

    try {
        const time = await Time.create(time);
        return time;
    } catch(error) {
        throw Error('Time.service.js -> Error creating Time');
    }
};

exports.update = async (id, time) => {
    try {
        time._id = id;

        let updatedTime = await Time.findByIdAndUpdate(id, { $set: { "year": time.year,
         "month": time.month, "day" : time.day, "time": time.time} }, { new: true });

        console.log(updatedTime);
        return updatedTime;
    } catch(error) {
        console.log(error);
        throw Error('Time.service.js -> Error updating Time');
    }
}

exports.delete = async (id) => {
    try {
        const time = await Time.findByIdAndDelete(id); 
    } catch(error) {
        console.log(error);
        throw Error('Time.service.js -> Error deleting Time');
    }
};