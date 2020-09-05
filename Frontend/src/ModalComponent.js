import React from "react";
import "./css/App.css";
import { Modal, Button } from "react-bootstrap";

export default class ModalComponent extends React.Component {
  
  render() {

    return (
        <div>
            <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header>
                        <Modal.Title>
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.body}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-sm btn-qacinema" onClick={this.props.onHide} >Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
