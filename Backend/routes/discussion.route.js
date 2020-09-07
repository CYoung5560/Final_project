const express = require('express');
const passport = require('passport');

const discussionController = require('../controllers/discussion.controller');
const ROLES = require('../utils/roles').ROLES;
const checkIsInRole = require('../utils/auth').checkIsInRole;

const router = express.Router();

// Router middleware, activates on every request.
router.use((request, response, next) => {
    console.log(request.method, `movie${request.url}`);
    next();
});

//READ
router.get('/:id', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Customer, ROLES.Admin), discussionController.getDiscussionById);


//CREATE
router.post('', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Customer, ROLES.Admin), discussionController.createDiscussion);

//UPDATE
router.put('/:id', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), discussionController.updateDiscussion);

//DELETE
router.delete('/:id', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), discussionController.deleteDiscussion);

module.exports = router;