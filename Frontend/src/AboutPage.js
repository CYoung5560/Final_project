import React from "react";
import "./css/App.css";
import { Button, Col, Row, Form, Table } from "react-bootstrap";
//import axios from 'axios';

export default class About extends React.Component {
  
  render() {
    return (
      
      <div>
        <h1>About Us</h1>
  
        <h5>The Team:</h5>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>              
              <th>Email Address</th>
              <th>Github</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shiva King</td>
              <td>Developer</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Nilay Sanghrajka</td>
              <td>Scrum Master/Developer</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Morgan Walsh</td>
              <td>Developer</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Conner Young</td>
              <td>Product Young/Developer</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>

      </div>

    )
  }
}



