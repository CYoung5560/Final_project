import React, { useState } from "react";
import "./css/App.css";
import { Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getToken } from './utils/token';
import ModalComponent from './ModalComponent';


export default function ModalGButton(){

  const [data, setData, show, title, body] = useState({});
  const movieName = this.props.movieTitle;

  const handleShow = () => {
    
    const token = getToken();
    console.log(movieName);
    fetch(`http://localhost:8000/movie/title/${movieName}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setData(result.data);
                console.log(data);
            })
            .catch((error) => console.log(error));

    this.setState({
       show: true,
       title: 'Movie Info',
       body: 'Snapshot information',
     });
   };
 
   const handleClose = () => {
     
     this.setState({
       show: false
     });
   };

    return (
      <div>
      <Button className="btn btn-sm btn-qacinema" onClick={handleShow} >
        More Info
      </Button>
      
      <ModalComponent
        show={this.state.show}
        title={this.state.title}
        body={this.state.body}
        data={data}
        onClick={handleClose}
        onHide={handleClose} />
    </div>
    );
  }

