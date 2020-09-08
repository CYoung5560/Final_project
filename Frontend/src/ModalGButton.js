import React, { useState } from "react";
import "./css/App.css";
import { Button } from "react-bootstrap";
import ModalComponent from './ModalComponent';
import { getToken } from './utils/token';


export default class ModalGButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      show: false,
      title: "",
      body: "",
      data: []
    };
  }

  handleShow = () => {
  
    const token = getToken();
    const movieName = this.props.movieName;
    console.log(movieName);
    fetch(`http://localhost:8000/movie/title/${movieName}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                this.setState(result.data);
                console.log(this.state.data);
            })
            .catch((error) => console.log(error));

    this.setState({
       show: true,
       title: this.props.movieTitle,
       body: 'Snapshot info:',
     });
   };
 
   handleClose = () => {
     this.setState({
       show: false
     });
   };


  render() {
    return (
      <div>
      <Button className="btn btn-sm btn-qacinema" onClick={this.handleShow} >
        More Info
      </Button>
      
      <ModalComponent
        show={this.state.show}
        title={this.state.title}
        body={this.state.body}
        data={this.state.data}
        onClick={this.handleClose}
        onHide={this.handleClose} />
    </div>
    );
  }
}
