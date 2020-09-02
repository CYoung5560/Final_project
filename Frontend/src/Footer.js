import React from "react";
import "./App.css";

// Footer component
export default class Footer extends React.Component {
  render() {
    return (
       
      <footer class="container inner2Colour py-5">
        <div class="row">
          <div class="col-12 col-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
            <small class="d-block mb-3 text-muted">&copy; Callisto 2020</small>
          </div>
        <div class="col-6 col-md">
          <h5>Social media</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" id="facebookFooterLink" target="_blank" href="">Facebook</a></li>
            <li><a class="text-muted" id="anotherLink" target="_blank" href="">Something else</a></li>
            <li><a class="text-muted" id="andAnotherLink" target="_blank" href="">Something else again</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Site Management</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" id="adminPortalLink" href="">Admin Portal</a></li>
          </ul>
        </div>
      </div>
    </footer>
      
    )
  }
}



