const express = require('express');
const passport = require('passport');

const ContactController = require('../controllers/contact.controller.js');
const ROLES = require('../utils/roles').ROLES;
const checkIsInRole = require('../utils/auth').checkIsInRole;

const router = express.Router();

router.post('', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Customer), ContactController.create);

module.exports = router;