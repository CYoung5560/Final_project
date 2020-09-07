import React from "react";
import "./css/App.css";
import { Button } from "react-bootstrap";
import ModalComponent from './ModalComponent';


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
    // Movie database items
    const myObject = [
      {
        movieTitle: 'Victor Rippin',
        movieRating: '15'
      }
    ];


    this.setState({
       show: true,
       title: 'Movie Info',
       body: 'Snapshot information',
       data: myObject
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
