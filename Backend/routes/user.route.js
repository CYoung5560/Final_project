const express = require('express');
const connectEnsureLogin = require('connect-ensure-login');

const UserController = require('../controllers/user.controller');

const router = express.Router();

// Router middleware, activates on every request.
router.use((request, response, next) => {
    // Log request to console.
    console.log(request.method, `user${request.url}`);
    // continue onto requested route.
    next();
});

router.post('/signup', UserController.signup);

router.post('/login', UserController.login);

router.post('/logout', UserController.logout)

router.get('/user/get/:id', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), UserController.get);

router.delete('/user/delete/:id', passport.authenticate('jwt', { session: false }), checkIsInRole(ROLES.Admin), UserController.delete);

module.exports = router;