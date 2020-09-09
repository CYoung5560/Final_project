const User = require('../models/user.model');
const Roles = require('../utils/roles');
const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.signup = async (username, password) => {

    const newUser = {
        username: username,
        role: Roles.ROLES.Customer
    };

    try {
        console.log(newUser);
        const savedUser = await User.register(newUser, password);
        console.log(savedUser);
        return savedUser;
    } catch (error) {
        throw Error(`user.service.js -> this error; ${error}`);
    }
};

exports.getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch(error) {
        throw Error('User.service.js -> Error finding user by id');
    }
};

exports.delete = async (id) => {
    try {
        const user = await User.findByIdAndDelete(id); 
    } catch(error) {
        console.log(error);
        throw Error('User.service.js -> Error deleting user');
    }
};