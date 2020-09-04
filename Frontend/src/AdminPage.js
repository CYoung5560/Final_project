import React from "react";
import "./css/App.css";
//import axios from 'axios';

import { getToken } from './utils/token';

export default class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gdTicketId: "",
            cuTicketId: "",
            cuTicketMovie: "",
            cuTicketConcession: "Adult",
            cuTransId: "",
            gdMovieId: "",
            gMovieTitle: "",
            cuMovieId: "",
            cuMovieTitle: "",
            cuMovieDescription: "",
            cuMovieYear: "",
            cuMovieActors: "",
            cuMovieDirectors: "",
            cuMovieImdb: "",
            cConcessionName: "",
            cConcessionPrice: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    getMovieById = async (event) => {
        event.preventDefault();

        const token = getToken();
        const movieId = this.state.gdMovieId;

        fetch(`http://localhost:8000/movie/${movieId}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }

    getMovieByTitle = async (event) => {
        event.preventDefault();

        const token = getToken();
        const movieTitle = this.state.gMovieTitle;

        fetch(`http://localhost:8000/movie/title/${movieTitle}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }

    postMovie = async (event) => {
        event.preventDefault();

        const token = getToken();
        const movie = {
            title: this.state.cuMovieTitle,
            year: this.state.cuMovieYear,
            description: this.state.cuMovieDescription,
            actors: this.state.cuMovieActors,
            director: this.state.cuMovieDirectors,
            imdb: this.state.cuMovieImdb
        };

        fetch(`http://localhost:8000/movie`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(movie)
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }

    updateMovie = async (event) => {
        event.preventDefault();

        const token = getToken();
        const movieId = this.state.cuMovieId;
        const movie = {
            title: this.state.cuMovieTitle,
            year: this.state.cuMovieYear,
            description: this.state.cuMovieDescription,
            actors: this.state.cuMovieActors,
            director: this.state.cuMovieDirectors,
            imdb: this.state.cuMovieImdb
        };

        fetch(`http://localhost:8000/movie/${movieId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(movie)
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }

    deleteMovieById = async (event) => {
        event.preventDefault();

        const token = getToken();
        const movieId = this.state.gdMovieId;

        fetch(`http://localhost:8000/movie/${movieId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }

    postConcession = async (event) => {
        event.preventDefault();

        const token = getToken();
        const concession = {
            concession: this.state.cConcessionName,
            price: this.state.cConcessionPrice
        }

        fetch(`http://localhost:8000/concession`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(concession)
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }

    getTicketById = async (event) => {
        event.preventDefault();

        const token = getToken();
        const ticketId = this.state.gdTicketId;

        fetch(`http://localhost:8000/ticket`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                id: ticketId
            })
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }

    postTicket = async (event) => {
        event.preventDefault();

        const token = getToken();
        const ticket = {
            movieTitle: this.state.cuTicketMovie,
            concession: this.state.cuTicketConcession,
            transId: this.state.cuTransId
        };

        fetch(`http://localhost:8000/ticket`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(ticket)
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }

    updateTicket = async (event) => {
        event.preventDefault();

        const token = getToken();
        const ticket = {
            id: this.state.cuTicketId,
            movieTitle: this.state.cuTicketMovie,
            concession: this.state.cuTicketConcession,
            transId: this.state.cuTransId
        };

        fetch(`http://localhost:8000/ticket`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(ticket)
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }

    deleteTicketById = async (event) => {
        event.preventDefault();

        const token = getToken();
        const ticketId = this.state.gdTicketId;

        fetch(`http://localhost:8000/ticket`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                id: ticketId
            })
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div className="container">
                <h1 className="mb-5 mt-3">Admin Console</h1>
                <div className="row my-5 p-3 bg-light">
                    {/* Ticket routes */}
                    <h2 className="col-12">GET/DELETE Ticket</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="ticketId">ID</label>
                            <input type="text" className="form-control" id="ticketId" name="gdTicketId" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={this.getTicketById}>GET</button>
                        <button type="submit" className="btn btn-danger w-100" onClick={this.deleteTicketById}>DELETE</button>
                    </form>

                    <h2 className="col-12 mt-5">CREATE/UPDATE Ticket</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="cuTicketId">ID</label>
                            <input type="text" className="form-control" id="cuTicketId" name="cuTicketId" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="movieTitleTicket">Movie Title</label>
                            <input type="text" className="form-control" id="movieTitleTicket" name="cuTicketMovie" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label className='w-100'>
                                Concession
                                <select className='custom-select d-block w-100 form-control' id='ticketConcession' name="cuTicketConcession" onChange={this.handleChange}>
                                    <option value='Child'>Child</option>
                                    <option value='Adult'>Adult</option>
                                    <option value='Senior'>Senior</option>
                                    <option value='Student'>Student</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-group">
                            <label for="transId">Transaction ID</label>
                            <input type="text" className="form-control" id="transId" name="cuTransId" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={this.postTicket}>CREATE</button>
                        <button type="submit" className="btn btn-warning w-100" onClick={this.updateTicket}>UPDATE</button>
                    </form>
                </div>

                {/* Movie routes
                - When doing CREATE, save image first and use id from return image obj
                */}
                <div className="row my-5 p-3 bg-light">
                    <h2 className="col-12">GET/DELETE Movie (ID)</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="gdMovieId">ID</label>
                            <input type="text" className="form-control" id="gdMovieId" name="gdMovieId" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={this.getMovieById}>GET</button>
                        <button type="submit" className="btn btn-danger w-100" onClick={this.deleteMovieById}>DELETE</button>
                    </form>

                    <h2 className="col-12 mt-5">GET Movie (Title)</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="gMovieTitle">Movie Title</label>
                            <input type="text" className="form-control" id="gMovieTitle" name="gMovieTitle" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={this.getMovieByTitle}>GET</button>
                    </form>

                    <h2 className="col-12 mt-5">CREATE/UPDATE Movie</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="cuMovieId">Movie ID (Update only)</label>
                            <input type="text" className="form-control" id="cuMovieId" name="cuMovieId" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="cuMovieTitle">Movie Title</label>
                            <input type="text" className="form-control" id="cuMovieTitle" name="cuMovieTitle" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="cuMovieDescription">Movie Description</label>
                            <textarea type="text" className="form-control" id="cuMovieDescription" rows="5" name="cuMovieDescription" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="cuMovieYear">Movie Year</label>
                            <input type="number" className="form-control" id="cuMovieYear" name="cuMovieYear" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="cuMovieActors">Movie Actors</label>
                            <input type="text" className="form-control" id="cuMovieActors" name="cuMovieActors" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="cuMovieDirectors">Movie Directors</label>
                            <input type="text" className="form-control" id="cuMovieDirectors" name="cuMovieDirectors" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="cuMovieImdb">Movie IMDB (URL)</label>
                            <input type="text" className="form-control" id="cuMovieImdb" name="cuMovieImdb" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={this.postMovie}>CREATE</button>
                        <button type="submit" className="btn btn-warning w-100" onClick={this.updateMovie}>UPDATE</button>
                    </form>
                </div>

                {/* Concession route */}
                <div className="row my-5 p-3 bg-light">
                    <h2 className="col-12 mt-5">CREATE Concession</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="cConcessionName">Concession Name</label>
                            <input type="text" className="form-control" id="cConcessionName" placeholder="Adult"
                                name="cConcessionName" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="cConcessionPrice">Concession Price</label>
                            <input type="number" className="form-control" id="cConcessionPrice" placeholder="£"
                                name="cConcessionPrice" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={this.postConcession}>CREATE</button>
                    </form>
                </div>
            </div>
        )
    }
}