const TimeService = require('../services/time.service');

exports.get = async (request, response, next) => {

    try {
        const time = await TimeService.getTimeById(request.params.id);
        return response.status(200).json({ status: 200, data: time, message: "Time.controller -> Successfully retrieved Time by id"});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.create = async (request, response, next) => {

    try {
        const time = await TimeService.create(request.body);
        return response.status(200).json({ status: 200, data: time, message: "Time.controller -> Successfully created Time"});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.update = async (request, response, next) => {
    try{
        const time = await TimeService.update(request.params.id, request.body);
        return response.status(200).json({status: 200, data: time, message: "time.controller -> Successfully updated entry"})
    } catch(error) {
        return response.status(400).json({status: 400, message: error.message});
    }
}

exports.delete = async (request, response, next) => {
    try{
        const time = await TimeService.delete(request.params.id, request.body);
        return response.status(200).json({status: 200, data: time, message: "time.controller -> Successfully deleted entry"})
    } catch(error) {
        return response.status(400).json({status: 400, message: error.message});
    }
}