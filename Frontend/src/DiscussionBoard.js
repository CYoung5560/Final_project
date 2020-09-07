import React from "react";
import "./css/App.css";
import { Button, Col, Row, Form, Table} from "react-bootstrap";


import axios from "axios";

export default class DiscussionBoard extends React.Component {
  constructor(props) {
    super(props);
        
    this.state = {
        tablerows:[{username:"",comment:""}]
    };
    this.addRow = this.addRow.bind(this);
    this.addRecord = this.addRecord.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event)=>{
    this.setState({ [event.target.name]: event.target.value });
    }

    addRecord(){
    this.setState({
        records:this.state.records.concat({
                username:this.state.username,
               // comment:this.state.comment
            })	
        })
    }

    addRow () {
        var newdata = {username:"revdrking", comment:"Great film"}     
        this.setState({ tablerows: this.state.tablerows.concat(newdata) });    
    }
    rows(){
        return this.state.tablerows.map(function(row,i){
              return   (<tr key={i}>
                       <td>{row.username}</td>
                       <td>{row.comment}</td> 
                       </tr>);
        });
    }

  render() {
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Username</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
            </tbody>
        </Table>

        <form
          id="post-form"
    
           // onSubmit=""
          //method="POST"
        >
          <div className="form-group row">
            <div class="col-sm-4">
                <input type="text" className="form-control" placeholder="Username"/>
            </div>
          </div>
          
          <div className="form-group row">
            <div class="col-sm-8">
                <textarea
                rows="5"
                class="form-control"
                id="comment"
                name="comment"
                //   onChange={this.handleChange}
                placeholder="Your comment here"
                // required value={this.state.comment}
                />
                </div>
          </div>
          <div className="form-group row">
            <div class="col-sm-1">
                <button type="submit" className="btn btn-sm btn-qacinema" onClick={this.addRecord}>
                    Submit
                </button>
            </div>
          </div>
        </form> 
      </div>
    );
  }

}