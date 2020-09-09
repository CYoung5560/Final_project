import React from "react";
import axios from "axios";

import "./css/App.css";
import { Container } from "react-bootstrap";
import ModalComponent from './ModalComponent';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      show: false,
      title: "",
      body: "",
      data: [],
      success: false
    };
  }

  handleShow = () => {
    if (this.state.success){
    this.setState({
      show: true,
      title: 'Brilliant!',
      body: 'Thank you for sigining up!',
      
    });
  }
  if (!this.state.success){
    this.setState({
      show: true,
      title: 'Oh snap!',
      body: 'Please enter a valid username and password'
    });
  }

};


handleClose = () => {
 
  this.setState({
    show: false
  });
};


  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    const user = {
      "username": this.state.username,
      "password": this.state.password
    };

    event.preventDefault();

    fetch('http://35.230.151.148:8000/signup', {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }).then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          success: true
        });
        // Redirect to /login
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          success: false
        });
      });
  };

  render() {
    return (
      <div>
        <Container className="cntr_main_qacinema">
        <br></br>
        <br></br>
        <form class="form-signup" onSubmit={this.handleSubmit}>
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Welcome! Please enter your details</h4>
              <form class="needs-validation" id="formCreateCustomer" novalidate>
               <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="name">Name</label>
                    <input 
                      onChange={this.handleUsernameChange}
                      class="form-control" 
                      type="text" 
                      id="name" 
                      name="customerName"
                      autocomplete="off"
                      required></input>
                    <div class="invalid-feedback">
                      Valid name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                  </div>
                </div> 
              <div class="mb-3">
                <label for="password">Password</label>
                <input
                  onChange={this.handlePasswordChange}
                  class="form-control"
                  type="password"
                  id="password"
                  name="customerPassword"
                  autocomplete="off"
                  required></input>
                <div class="invalid-feedback">
                  Please enter a valid password.
                  </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <button class="btn btn-secondary btn-md btn-qacinema" id="createCustomer" type="submit" onClick={this.handleShow}>Submit</button>
                  <ModalComponent
                    show={this.state.show}
                    title={this.state.title}
                    body={this.state.body}
                    data={this.state.data}
                    onClick={this.handleClose}
                    onHide={this.handleClose} />
                </div>
              </div>
              <br></br>
            </form>
          </div>
        </form>
        </Container>
      </div>

    );
  }
}