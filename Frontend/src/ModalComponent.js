import React from "react";
import "./css/App.css";
import { Modal, Button, Container} from "react-bootstrap";

export default class ModalComponent extends React.Component {
  
  render() {

    return (
        <div>
            <Modal show={this.props.show} onHide={this.props.onHide}>
            <Container className="cntr_main_qacinema">
              
                    <Modal.Header>
                        <Modal.Title>
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.body}

                        <table>
                        {this.props.data.map(item => (
                            <tr> 
                                <td>Movie: {item.movieTitle}</td>
                                <td>Rating: {item.movieRating}</td>
                            </tr>   
                        ))}
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-sm btn-qacinema" onClick={this.props.onHide} >Close</Button>
                    </Modal.Footer>
                    </Container>
                </Modal>
            </div>
        );
    }
}
