const ContactService = require('../services/contact.service');

exports.create = async (request, response, next) => {

    try {
        await ContactService.create(request.body);
        return response.status(200).json({ status: 200, message: "contact.controller -> Successfully created contact"});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};