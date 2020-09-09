import React from "react";
import "./css/App.css";
import { Modal, Button, Container } from "react-bootstrap";

export default class MovieComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    showProps() {
        console.log(this.props)
    }

    render() {
        // this.showProps();
        return (
            <div>
                <table>
                    <tr>
                        <td>Movie: {this.props.title}</td>
                    </tr>
                    <tr>
                        <td>Year: {this.props.year}</td>
                    </tr>
                    <tr>
                        <td>Director: {this.props.director}</td>
                    </tr>
                    <tr>
                        <td>Actors: {this.props.actors}</td>
                    </tr>
                    <tr>
                        <td>Description: {this.props.description}</td>
                    </tr>
                </table>
            </div>

        );
    }
}
