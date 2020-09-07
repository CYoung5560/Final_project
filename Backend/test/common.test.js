// process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require('config');

const server = require('../server');
const User = require('../models/user.model');
const ROLES = require('../utils/roles').ROLES;

chai.use(chaiHttp);

const defaultUser = { username: "Fred", role: ROLES.Admin };

const createUser = async () => {
    User.register(defaultUser, "password");
};

module.exports = loginWithDefaultUser = async () => {
    if (!User.findOne({ 'title': defaultUser.username })) {
        await createUser();
    }

    await chai.request(server)
        .post('/login')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send({ "username": defaultUser.username, "password": "password" })
        .then((error, response) => {
            // if (error) throw new Error(error);
            console.log(response);
            return response;
        }).catch(error => {
            console.log("Here I am", error);
        });
        // .end((error, response) => {
        //     console.log(response)
        //     return response;
        // })
}