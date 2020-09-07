import React from "react";
import "./css/App.css";
import { Modal, Button, Container} from "react-bootstrap";

export default class MovieComponent extends React.Component {
  
  render() {

    return (
        <div>
        
            {this.props.data.map(item => (
                 <table>
                <tr> 
                    <td>Movie: {item.movieTitle}</td>
                    
                </tr>   
                <tr> 

                    <td>Rating: {item.movieRating}</td>
                </tr> 
                </table>
            ))}
              
        </div>

        );
    }
}
