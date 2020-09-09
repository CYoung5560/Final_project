const express = require('express');
const passport = require('passport');

const TimeController = require('../controllers/time.controller');
const ROLES = require('../utils/roles').ROLES;
const checkIsInRole = require('../utils/auth').checkIsInRole;

const router = express.Router();

router.get('/:id', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Customer, ROLES.Admin), TimeController.get);

router.post('', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), TimeController.create);

router.put('/:id', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), TimeController.update);

router.delete('/:id', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), TimeController.delete);


module.exports = router;