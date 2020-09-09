const ImageService = require('../services/image.service');

exports.getImageById = async (request, response, next) => {

    // Validation of request params
    try {
        // Pass control to imageService
        const image = await ImageService.getImageById(request.params.id);
        const imgBuffer = image.img.data;
        const img = imgBuffer.toString('base64');
        return response.status(200).json({ status: 200, data: img, message: "image.controller -> Successfully retrieved movie by id"});
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.createImage = async (request, response, next) => {

    try {
        const image = await ImageService.createImage(request);
        return response.status(200).json({ status: 200, data: image, message: "image.controller -> Successfully created image in db" });
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.updateImage = async (request, response, next) => {

    try {
        const image = await ImageService.updateImage(request);
        return response.status(200).json({ status: 200, data: image, message: "image.controller -> Successfully updated image in db" });
    } catch(error) {
        return response.status(400).json({ status: 400, message: error.message });
    }
};

exports.deleteImage = async (request, response, next)  => {
    try{
        const image = await ImageService.deleteImage(request.params.id);
        return response.status(200).json({status: 200, data: image, message: "image.controller -> Successfully deleted image"})
    } catch(error) {
        return response.status(400).json({status:400, message: error.message});
    }
};