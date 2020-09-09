import React from "react";
import "./css/App.css";
import { Container } from "react-bootstrap";
import axios from 'axios';
import cookieParser from 'cookie-parser';

export default class Login extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''};
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
    axios.post('http://35.230.151.148:8000/login', user)
      .then((response) => {
        console.log(response.data.token);
        document.cookie = `token=${response.data.token}`;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Container className="cntr_main_qacinema">
            <form class="form-signin" onSubmit={this.handleSubmit}>
              <h1 class="h3 mb-3 font-weight-normal">
                Welcome! Please sign in
              </h1>
              <label for="username" class="sr-only">
                Username
              </label>
              <input
                onChange={this.handleUsernameChange}
                type="username"
                name="username"
                id="customerEmail"
                class="form-control"
                placeholder="Username"
                required
                autofocus
              ></input>
              <br></br>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                onChange={this.handlePasswordChange}
                type="password"
                name="userpwd"
                id="customerPassword"
                class="form-control"
                placeholder="Password"
                required
              ></input>
              {/* <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me">Remember me</input>
          </label>
        </div> */}
              <br></br>
              <button
                class="btn btn-md btn-secondary btn-block"
                type="submit"
                onclick="/"
              >
                Sign in
              </button>
            </form>
            </Container>
      </div>
    );
  }
}
