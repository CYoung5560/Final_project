import React from "react";
import "./css/App.css";
//import axios from 'axios';

export default class AdminPage extends React.Component {

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
                            <input type="text" className="form-control" id="ticketId" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">GET</button>
                        <button type="submit" className="btn btn-danger w-100">DELETE</button>
                    </form>

                    <h2 className="col-12 mt-5">CREATE/UPDATE Ticket</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="movieTitle">Movie Title</label>
                            <input type="text" className="form-control" id="movieTitle" />
                        </div>
                        <div className="form-group">
                            <label className='w-100'>
                                Concession
                                <select className='custom-select d-block w-100 form-control' id='concession'>
                                    <option value='Child'>Child</option>
                                    <option value='Adult'>Adult</option>
                                    <option value='Senior'>Senior</option>
                                    <option value='Student'>Student</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-group">
                            <label for="transId">Transaction ID</label>
                            <input type="text" className="form-control" id="transId" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">CREATE</button>
                        <button type="submit" className="btn btn-warning w-100">UPDATE</button>
                    </form>
                </div>

                {/* Movie routes
                - When doing CREATE, save image first and use id from return image obj
                */}
                <div className="row my-5 p-3 bg-light">
                    <h2 className="col-12">GET/DELETE Movie (ID)</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="movieId">ID</label>
                            <input type="text" className="form-control" id="movieId" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">GET</button>
                        <button type="submit" className="btn btn-danger w-100">DELETE</button>
                    </form>

                    <h2 className="col-12 mt-5">GET Movie (Title)</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="movieTitle">Movie Title</label>
                            <input type="text" className="form-control" id="movieTitle" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">GET</button>
                    </form>

                    <h2 className="col-12 mt-5">CREATE/UPDATE Movie</h2>
                    <form className="col-12">
                        <div className="form-group">
                            <label for="movieTitle">Movie Title</label>
                            <input type="text" className="form-control" id="movieTitle" />
                        </div>
                        <div className="form-group">
                            <label className='w-100'>
                                Concession
                                <select className='custom-select d-block w-100 form-control' id='concession'>
                                    <option value='Child'>Child</option>
                                    <option value='Adult'>Adult</option>
                                    <option value='Senior'>Senior</option>
                                    <option value='Student'>Student</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-group">
                            <label for="transId">Transaction ID</label>
                            <input type="text" className="form-control" id="transId" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">CREATE</button>
                        <button type="submit" className="btn btn-danger w-100">UPDATE</button>
                    </form>
                </div>

                {/* Concession route */}
            </div>
        )
    }
}