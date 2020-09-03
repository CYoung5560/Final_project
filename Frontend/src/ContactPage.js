import React from "react";
import "./css/App.css";
import "./css/signin.css";
import { Button, Col, Row, Form, Table } from "react-bootstrap";
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
        <h5>Find Us:</h5>
        <p>8, St James's Bldg, 61-95 Oxford St, Manchester M1 6FQ</p>

        <h5>Opening Times:</h5>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Day</th>
              <th>Times</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>10.00am - 10.00pm</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>10.00am - 10.00pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>10.00am - 10.00pm</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>10.00am - 10.00pm</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>10.00am - 12.00am</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>10.00am - 12.00am</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>10.00am - 10.00pm</td>
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