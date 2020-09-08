import React from "react";
import "./css/App.css";
import { Button, Col, Row, Form, Table, Container } from "react-bootstrap";

import axios from "axios";

export default class ContactUs extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "",
  //     email: "",
  //     message: "",
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(event) {
  //   const messageHtml =  renderEmail(
  //     <MyEmail name={this.state.name}> {this.state.feedback}</MyEmail>
  //   );
    
  //   axios({
  //     method: "POST",
  //     url: "http://localhost:3002/send",
  //     data: {
  //     	name: this.state.name,
  //     	email: this.state.email,
  //     	messageHtml: messageHtml
  //           }
  //   }).then((response) => {
  //     if (response.data.status === "success") {
  //       alert("Message Sent.");
  //       this.resetForm();
  //     } else if (response.data.status === "fail") {
  //       alert("Message failed to send.");
  //     }
  //   });
  // }

  // resetForm() {
  //   this.setState({ feedback:'' });
  // }

  render() {
    return (
      <div>
         <Container className="cntr_main_qacinema">
        <h5>Find Us:</h5>
        <p class="lead">
                Anchorage 1
                Anchorage Quay Salford, 
                The Quays,
                Manchester
                M50 3YJ 
              </p>

        <h5>Opening Times:</h5>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Day</th>
              <th>Matinee</th>
              <th>Blast from the Past</th>
              <th>Late Night Horror</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>4.00pm - 6.30pm</td>
              <td>7.30pm - 9.30pm</td>
              <td>10.30pm - 12.30am</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>4.00pm - 6.30pm</td>
              <td>7.30pm - 9.30pm</td>
              <td>10.30pm - 12.30am</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>4.00pm - 6.30pm</td>
              <td>7.30pm - 9.30pm</td>
              <td>10.30pm - 12.30am</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>4.00pm - 6.30pm</td>
              <td>7.30pm - 9.30pm</td>
              <td>10.30pm - 12.30am</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>4.00pm - 6.30pm</td>
              <td>7.30pm - 9.30pm</td>
              <td>10.30pm - 12.30am</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>4.00pm - 6.30pm</td>
              <td>7.30pm - 9.30pm</td>
              <td>10.30pm - 12.30am</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>4.00pm - 6.30pm</td>
              <td>7.30pm - 9.30pm</td>
              <td>10.30pm - 12.30am</td>
            </tr>
          </tbody>
        </Table>

        {/* <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Name"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              rows="5"
              id="test-mailing"
              name="test-mailing"
              onChange={this.handleChange}
              placeholder="Your message here"
              required value={this.state.feedback}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
       
        </form> */}
        </Container>
      </div>
    );
  }

//   onNameChange(event) {
//     this.setState({ name: event.target.value });
//   }

//   onEmailChange(event) {
//     this.setState({ email: event.target.value });
//   }

//   onMessageChange(event) {
//     this.setState({ message: event.target.value });
//   }

//   handleSubmit() {}

}