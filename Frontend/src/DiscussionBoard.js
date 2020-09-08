import React from "react";
import "./css/App.css";
import { Button, Col, Row, Form, Table } from "react-bootstrap";


import axios from "axios";
import { getToken } from "./utils/token";

export default class DiscussionBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ""
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitPost = (event) => {
    event.preventDefault();

    const token = getToken();

    fetch(`http://localhost:8000/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        comment: this.state.comment
      })
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        console.log("props")
        console.log(this.props)
        // POST to discussion route movie ID and post ID
        fetch(`http://localhost:8000/discussion`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            movieID: this.props.movieId,
            post: result.data._id
          })
        })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  getComments = (event) => {
    event.preventDefault();
    const token = getToken();

    console.log("Fetching comments")

    fetch(`http://localhost:8000/discussion/all/${this.props.movieId}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log(error));
  }

  render() {
    return (
      // REQUIRES:
      //  - FORM TO CREATE COMMENT
      //    - Requires method to post to API and re-render table showing comments (update state for automatic re-render)
      //  - TABLE TO SHOW COMMENTS (Does not necessarily have to be a table)
      //    - Requires method to get from API
      <div>
        <Form>
          <div className="form-group row">
            <div class="col-sm-8">
              <textarea
                rows="5"
                class="form-control"
                id="comment"
                name="comment"
                onChange={this.handleChange}
                placeholder="Your comment here"
              />
              <button type="submit" className="btn btn-sm btn-qacinema w-100" onClick={this.submitPost}>Submit</button>
            </div>
          </div>
        </Form>
        <button onClick={this.getComments}>Get comments</button>
        <div className="container">
          <div className="row">
            <div className="card w-100">
              <h5 className="card-title text-left px-3 pt-3 mb-0">Username</h5>
              <div className="card-body text-left">
                <p>lorem ipsum dolet</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>

        <form
          id="contact-form"

        // onSubmit=""
        //method="POST"
        >
          <div className="form-group row">
            <div class="col-sm-4">
              <input type="text" className="form-control" placeholder="Username" />
            </div>
          </div>

          <div className="form-group row">
            <div class="col-sm-8">
              <textarea
                rows="5"
                class="form-control"
                id="comment"
                name="comment"
                //   onChange={this.handleChange}
                placeholder="Your comment here"
              // required value={this.state.comment}
              />
            </div>
          </div>
          <div className="form-group row">
            <div class="col-sm-1">
              <button type="submit" className="btn btn-sm btn-qacinema" onClick={this.addRecord}>
                Submit
                </button>
            </div>
          </div>
        </form> */}
      </div>
    );
  }

}