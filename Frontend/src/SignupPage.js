import React from "react";
import "./css/App.css";
import "./css/signup.css";

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <form class="form-signup">
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Welcome! Please enter your details</h4>
              
              <form class="needs-validation" id="formCreateCustomer" novalidate>
                <div class="row">
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
                </div>
                <div class="mb-3">
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
                </div>
                <div class="mb-3">
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
                </div>
                <div class="mb-3">
                  <label for="email">Email/Username</label>
                  <input 
                    class="form-control" 
                    type="email" 
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
