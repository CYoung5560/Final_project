import React from "react";
import "./css/App.css";
import { Button, Col, Row, Form, Table } from "react-bootstrap";

import axios from "axios";

export default class DiscussionBoard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: "",
  //     comment: "",
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(event) {
  //   const comment =  renderEmail(
  //     
  //   );
    
  //   axios({
  //     method: "POST",
  //     url: "http://localhost:3002/discussionboard",
  //     data: {
  //     	username: this.state.username,
  //     	comment: this.state.comment
  //           }
  //   }).then((response) => {
  //     if (response.data.status === "success") {
  //       alert("Comment Sent.");
  //       this.resetForm();
  //     } else if (response.data.status === "fail") {
  //       alert("Comment failed to send.");
  //     }
  //   });
  // }

  // resetForm() {
  //   this.setState({ discussionboard:'' });
  // }

  render() {
    return (
      <div>
        <Table striped bordered hover size="sm">
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
        //   onSubmit={this.handleSubmit.bind(this)}
            onSubmit=""
          method="POST"
        >
          <div className="form-group row">
            <div class="col-sm-4">
                <input type="text" className="form-control" placeholder="Username"/>
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
                <button type="submit" className="btn btn-sm btn-qacinema">
                    Submit
                </button>
            </div>
          </div>
        </form> 
      </div>
    );
  }

//   onNameChange(event) {
//     this.setState({ username: event.target.value });
//   }


//   onCommentChange(event) {
//     this.setState({ comment: event.target.value });
//   }

//   handleSubmit() {}

}