process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../../server');
const Movie = require('../../models/movie.model');

const should = chai.should();

chai.use(chaiHttp);

