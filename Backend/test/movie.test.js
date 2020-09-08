// process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const phin = require('phin');

const server = require('../server');
const Movie = require('../models/movie.model');
const loginWithDefaultUser = require('./common.test');
const { resolveContent } = require('nodemailer/lib/shared');
const { expect, assert } = require('chai');

const should = chai.should();

chai.use(chaiHttp);

const movie = {
    "title": "Jackass: The Movie",
    "year": "2002",
    "description": "Spectacular thrills and stupid",
    "actors": "Bam Margera, Johny Knoxville, Chris Pontius, Steve-O, Weeman, etc...",
    "director": "Jeff Tremaine",
    "imdb": "imdb.com"
};
let movieId = null;
let token = null;

describe("Movie Controller Tests", () => {
    beforeEach(async () => {
        Movie.remove({}, async (error) => {
        });

        token = await loginWithDefaultUser();
        let response = await phin({
            url: "http://localhost:8000/movie",
            method: "POST",
            parse: 'json',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: movie
        });
        response.should.have.status(200);
        movieId = response.body.data._id;
    });

    describe('/GET movie by id', () => {
        it('it should GET the specified movie', async () => {
            const response = await phin({
                url: `http://localhost:8000/movie/${movieId}`,
                method: "GET",
                parse: 'json',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            // console.log(response);
            responseMovieTitle = response.body.data.title;
            assert.strictEqual(movie.title, responseMovieTitle);
        });
    });
})
