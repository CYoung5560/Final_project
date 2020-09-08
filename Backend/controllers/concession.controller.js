const ConcessionService = require('../services/concession.service');

exports.get = async (request, response, next) => {

    try {
        const concession = await ConcessionService.getConcessionById(request.params.id);
        return response.status(200).json({ status: 200, data: concession, message: "Concession.controller -> Successfully retrieved concession by id"});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.create = async (request, response, next) => {

    try {
        const concession = await ConcessionService.create(request.body);
        return response.status(200).json({ status: 200, data: concession, message: "concession.controller -> Successfully created concession"});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.update = async (request, response, next) => {
    try{
        const conc = await ConcessionService.updateConcession(request.params.id, request.body);
        return response.status(200).json({status: 200, data: conc, message: "concession.controller -> Successfully updated entry"})
    } catch(error) {
        return response.status(400).json({status: 400, message: error.message});
    }
}

exports.delete = async (request, response, next) => {
    try{
        const conc = await ConcessionService.deleteConcession(request.params.id, request.body);
        return response.status(200).json({status: 200, data: conc, message: "concession.controller -> Successfully deleted entry"})
    } catch(error) {
        return response.status(400).json({status: 400, message: error.message});
    }
}