import React from "react";
import "./css/App.css";
//import axios from 'axios';

import { getToken } from './utils/token';

export default class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        //g denotes get variables
        //c denotes create variables
        //d denotes delete variables
        //u denotes update variables
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
            cuConcessionID: "",
            cuConcessionName: "",
            cuConcessionPrice: "",
            gdConcessionID: "",
            cuDiscussionID: "",
            gdDiscussionID: "",
            cuDiscussionMovieID: "", 
            //discussion posts left out to create an empty 'thread' 
            gdImageID: "", 
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // These fetch statements can be reduced to one with a nullable body parameter and return a promise
    // which can be chained with .then() and .catch(), i.e. fetchMyData(url, method, body)

    //movie CRUD functions
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

    // post, put, get, delete discussion CRUD functions

    getDiscussionById = async (event) => {
        event.preventDefault();

        const token = getToken();
        const discussionID = this.state.gdDiscussionID;

        fetch(`http://localhost:8000/discussion/${discussionID}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }

    postDiscussion = async (event) => {
        event.preventDefault();

        const token = getToken();
        const discussion = {
            movieID: this.state.cuDiscussionMovieID,
        }

        fetch(`http://localhost:8000/Discussion`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(discussion)
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }

    putDiscussion = async (event) => {
        event.preventDefault();
    
        const token = getToken();
        const discussionID = this.state.cuDiscussionID
        const discussion = {
            movieID: this.state.cuDiscussionMovieID,
            //post id
        }

        fetch(`http://localhost:8000/discussion/${discussionID}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(discussion)
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }

    deleteDiscussionById = async (event) => {
        event.preventDefault();

        const token = getToken();
        const discussionID = this.state.gddiscussionID;

        fetch(`http://localhost:8000/discussion/${discussionID}`, {
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

    // image crud functions 
    // <img src="data:image/png;base64, <base64 string here>">
    getImageById = async (event) => {
        event.preventDefault();

        const token = getToken();
        const imageID = this.state.gdImageID;

        fetch(`http://localhost:8000/image/${imageID}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    }   
    
    deleteImageById = async (event) => {
        event.preventDefault();

        const token = getToken();
        const imageID = this.state.gdImageID;

        fetch(`http://localhost:8000/image/${imageID}`, {
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

    // concession crud functions

    getConcessionById = async (event) => {
        event.preventDefault();

        const token = getToken();
        const concessionID = this.state.gdConcessionID;

        fetch(`http://localhost:8000/concession/${concessionID}`, {
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
            concession: this.state.cuConcessionName,
            price: this.state.cuConcessionPrice
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

    putConcession = async (event) => {
        event.preventDefault();
    
        const token = getToken();
        const concessionID = this.state.cuConcessionID
        const concession = {
            concession: this.state.cuConcessionName,
            price: this.state.cuConcessionPrice
        }

        fetch(`http://localhost:8000/concession/${concessionID}`, {
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

    deleteConcessionById = async (event) => {
        event.preventDefault();

        const token = getToken();
        const concessionID = this.state.gdConcessionID;

        fetch(`http://localhost:8000/concession/${concessionID}`, {
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

    // ticket CRUD functions

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
                    <h2 className="col-12 mt-5">CREATE/UPDATE Concession</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="cuConcessionID">Concession ID (Update only)</label>
                            <input type="text" className="form-control" id="cuConcessionID" name="cuConcessionID" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="cuConcessionName">Concession Name</label>
                            <input type="text" className="form-control" id="cuConcessionName" placeholder="Adult"
                                name="cuConcessionName" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="cConcessionPrice">Concession Price</label>
                            <input type="number" className="form-control" id="cuConcessionPrice" placeholder="£"
                                name="cuConcessionPrice" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={this.postConcession}>CREATE</button>
                        <button type="submit" className="btn btn-primary w-100" onClick={this.putConcession}>UPDATE</button>
                    </form>
                    <h2 className="col-12">GET/DELETE Concession (ID)</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="gdConcessionId">ID</label>
                            <input type="text" className="form-control" id="gdConcessionId" name="gdConcessionId" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={this.getConcessionById}>GET</button>
                        <button type="submit" className="btn btn-danger w-100" onClick={this.deleteConcessionById}>DELETE</button>
                    </form>
                </div>

                {/* Image routes */}

                <h2 className="col-12">GET/DELETE Image (ID)</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="gdImageId">ID</label>
                            <input type="text" className="form-control" id="gdImageId" name="gdImageId" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={this.getImageById}>GET</button>
                        <button type="submit" className="btn btn-danger w-100" onClick={this.deleteImageById}>DELETE</button>
                    </form>
                

                {/* Discussion routes */}
                <div className="row my-5 p-3 bg-light">
                    <h2 className="col-12 mt-5">CREATE/UPDATE Discussion</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="cuDiscussionID">Discussion ID (Update only)</label>
                            <input type="text" className="form-control" id="cuDiscussionID" name="cuDiscussionID" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="cuDiscussionMovieID">Discussion movieID</label>
                            <input type="text" className="form-control" id="cuDiscussionMovieID" placeholder="Adult"
                                name="cuDiscussionMovieID" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={this.postDiscussion}>CREATE</button>
                        <button type="submit" className="btn btn-primary w-100" onClick={this.putDiscussion}>UPDATE</button>
                    </form>
                    <h2 className="col-12">GET/DELETE Discussion (ID)</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="gdDiscussionId">ID</label>
                            <input type="text" className="form-control" id="gdDiscussionId" name="gdDiscussionId" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={this.getDiscussionById}>GET</button>
                        <button type="submit" className="btn btn-danger w-100" onClick={this.deleteDiscussionById}>DELETE</button>
                    </form>
                </div>
            </div>
        )
    }
}