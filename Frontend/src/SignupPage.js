import React from "react";
import axios from "axios";

import "./css/App.css";


export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

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

    fetch('http://localhost:8000/signup', {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }).then((response) => response.json())
      .then((response) => {
        console.log(response);

        // Redirect to /login
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <form class="form-signup" onSubmit={this.handleSubmit}>
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Welcome! Please enter your details</h4>

            <form class="needs-validation" id="formCreateCustomer" novalidate>
              {/* <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="name">Name</label>
                    <input 
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
                </div> */}
              {/* <div class="mb-3">
                  <label for="address">Address</label>
                  <input 
                    class="form-control" 
                    type="text"
                    id="address" 
                    name="customerAddress" 
                    placeholder="155 Country Lane" 
                    autocomplete="off"
                    required></input>
                  <div class="invalid-feedback">
                    Please enter address.
                  </div>
                </div> */}
              {/* <div class="mb-3">
                  <label for="phone">Phone Number</label>
                  <input 
                    class="form-control" 
                    type="text" 
                    id="phone" 
                    name="customerPhone" 
                    placeholder="01273422342" 
                    autocomplete="off"
                    required></input>
                  <div class="invalid-feedback">
                    Please enter phone number.
                  </div>
                </div> */}
              <div class="mb-3">
                <label for="email">Email/Username</label>
                <input
                  onChange={this.handleUsernameChange}
                  class="form-control"
                  type="text"
                  id="email"
                  name="customerEmail"
                  placeholder="you@example.com"
                  autocomplete="off"
                  required></input>
                <div class="invalid-feedback">
                  Please enter a valid email address.
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
                  <button class="btn btn-secondary btn-md btn-block" id="createCustomer" type="submit">Submit</button>
                </div>
              </div>
              <br></br>
            </form>
          </div>
        </form>
      </div>

    );
  }
}
