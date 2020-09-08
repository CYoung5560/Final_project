const express = require('express');
const passport = require('passport');

const ConcessionController = require('../controllers/concession.controller');
const ROLES = require('../utils/roles').ROLES;
const checkIsInRole = require('../utils/auth').checkIsInRole;

const router = express.Router();

router.get('/:id', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Customer, ROLES.Admin), ConcessionController.get);

router.post('', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), ConcessionController.create);

router.put('', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), ConcessionController.update);

router.delete('/:id', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), ConcessionController.delete);


module.exports = router;