process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require('config');

const server = require('../server');
const User = require('../models/user.model');
const { create } = require('../models/user.model');
const ROLES = require('../utils/roles').ROLES;

const should = chai.should();

chai.use(chaiHttp);

const defaultUser = { username: "Fred", role: ROLES.Admin};

const createUser = async() => {
    User.register(defaultUser, "password");
};

module.exports = loginWithDefaultUser = async () => {
    if (!User.findOne({ 'title': defaultUser.username })) {
        await createUser();
    }
    chai.request(server)
        .post('/login')
        .send({ "username": defaultUser.username, "password": "password" })
        .end((error, response) => {
            return response.body.token;
        });
}