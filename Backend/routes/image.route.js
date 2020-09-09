const express = require('express');
const passport = require('passport');
const multer = require("multer");

const ImageController = require('../controllers/image.controller');
const ROLES = require('../utils/roles').ROLES;
const checkIsInRole = require('../utils/auth').checkIsInRole;

const router = express.Router();

var storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, 'uploads') 
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.fieldname + '-' + Date.now()) 
    } 
}); 
//multer storage obj middleware
var upload = multer({ storage: storage }); 

router.use((request, response, next) => {
    console.log(request.method, `image${request.url}`);
    next();
});

router.get('/:id', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Customer),  
    ImageController.getImageById);

router.post('/', passport.authenticate('jwt', { session: false }), upload.single('image'), checkIsInRole(ROLES.Admin), 
    ImageController.createImage);

module.exports = router;