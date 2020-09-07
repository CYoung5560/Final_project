process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server');
const Movie = require('../models/movie.model');
const loginWithDefaultUser = require('./common.test');

const should = chai.should();

chai.use(chaiHttp);

let movie = null;

describe('Movies', () => {
    beforeEach((done) => {
        Movie.remove({}, (error) => {
            done();
        });
    });
});

describe('/GET movie by id', () => {
    it('it should GET the specified movie', (done) => {
        const movie = { 
            "title": "Jackass: The Movie",
            "year": "2002",
            "description": "Spectacular thrills and stupid", 
            "actors": "Bam Margera, Johny Knoxville, Chris Pontius, Steve-O, Weeman, etc...",
            "director": "Jeff Tremaine",
            "imdb": "imdb.com" };
        const token = loginWithDefaultUser();
        chai.request(server)
            .post('/movie')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(movie)
            // .get('/movie/')
            .end((error, response) => {
                // console.log(response);
                done();
            });
    });
})