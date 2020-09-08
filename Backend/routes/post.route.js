const express = require('express');
const passport = require('passport');

const postController = require('../controllers/post.controller');
const ROLES = require('../utils/roles').ROLES;
const checkIsInRole = require('../utils/auth').checkIsInRole;

const router = express.Router();

// Router middleware, activates on every request.
router.use((request, response, next) => {
    console.log(request.method, `movie${request.url}`);
    next();
});

//READ
router.get('/:id', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Customer, ROLES.Admin), postController.getPostById);


//CREATE
router.post('', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Customer, ROLES.Admin), postController.createPost);

//UPDATE
router.put('/:id', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), postController.updatePost);

//DELETE
router.delete('/:id', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), postController.deletePost);

module.exports = router;