const Image = require('../models/image.model');
const { response } = require('express');
const fs = require("fs");
const path = require("path");

exports.getImageById = async (id) => {
    try {
        const image = await Image.findById(id);
        return image;
    } catch(error) {
        throw Error('image.service.js -> Error finding image by id');
    }
};

exports.createImage = async (request) => {
    try {
        const img = {
            img: {
                data: fs.readFileSync(path.join(__dirname + '/../uploads/' + request.file.filename)),
                contentType: 'image/png'
            } 
        };
        console.log(img);
        const savedImg = Image.create(img);
        return savedImg;
    } catch(error) {
        throw new Error(`image.service.js -> Error creating image, ERROR: ${error}`);
    }
}

exports.deleteImage = async (id) => {
    try {
        const Image = await Image.findByIdAndDelete(id); 
    } catch(error) {
        console.log(error);
        throw Error('image.service.js -> Error deleting image');
    }
};