import React from "react";
import "./App.css";
import "./signin.css";
import Table from "react-bootstrap/Table";
import { Button, Col, Row, Form } from "react-bootstrap";
import axios from "axios";

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){    
     this.setState({name: '', email: '', message: ''})
  }

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
     </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {}
}