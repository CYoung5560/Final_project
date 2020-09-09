import React from "react";
import "./css/App.css";
import { Table, Container } from "react-bootstrap";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Container className="cntr_main_qacinema">
          <Container className="cntr_insidemain_qacinema">
        <h1>About Us</h1>

        <h3>The Team:</h3>
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
              <td>
                <a href="mailto:shiva.king@academytrainee.com">Email Shiva</a>
              </td>
              <td>
                <a href="https://github.com/shivalasvegas">Shiva's Github</a>
              </td>
            </tr>
            <tr>
              <td>Nilay Sanghrajka</td>
              <td>Scrum Master/Developer</td>
              <td>
                <a href="mailto:nilay.sanghrajka@academytrainee.com">
                  Email Nilay
                </a>
              </td>
              <td>
                <a href="https://github.com/nilaysanghrajka">Nilay's Github</a>
              </td>
            </tr>
            <tr>
              <td>Morgan Walsh</td>
              <td>Developer</td>
              <td>
                <a href="mailto:morgan.walsh@academytrainee.com">
                  Email Morgan
                </a>
              </td>
              <td>
                <a href="https://github.com/MrWalshyType2">Morgan's Github</a>
              </td>
            </tr>
            <tr>
              <td>Connor Young</td>
              <td>Product Owner/Developer</td>
              <td>
                <a href="mailto:Connor.Young@academytrainee.com">
                  Email Connor
                </a>
              </td>
              <td>
                <a href="https://github.com/CYoung5560">Connor's Github</a>
              </td>
            </tr>
          </tbody>
        </Table>

        <h3>The Process</h3>

        <p>
          We had implemented a Scrum process to create this site.Scrum is an
          agile way to manage a project, usually software development. Agile
          software development with Scrum is often perceived as a methodology;
          but rather than viewing Scrum as methodology, think of it as a
          framework for managing a process.
        </p>

        <h4>Definitions:</h4>
        <h5>Product backlog</h5>
        <ul>
          <li>Used to determine the work for the next sprint </li>
          <li>
            A prioritized list of everything needed or wanted for the entire
            product
          </li>
          <li>Often written in the form of user stories</li>
          <li>Have estimates associated with them </li>
        </ul>

        <h5>Sprint Backlog</h5>
        <ul>
          <li>List of tasks that to be completed in a sprint</li>
          <li>
            The tasks are created by breaking down the stories during the
            planning meeting
          </li>
          <li>Have estimates (often in hours) associated with them </li>
        </ul>

        <h4>Roles</h4>
        <h5>Product Owner</h5>
        <ul>
          <li>Creates and prioritizes the product backlog</li>
          <li>Understands the customer’s needs and the business value</li>
        </ul>

        <h5>Scrum Master</h5>
        <ul>
          <li>
            Organizes the process keeps track of the teams progress removes
            obstacles from the path of the team
          </li>
        </ul>

        <h5>Team</h5>
        <p>(not just developers – everyone required to create the product) </p>
        <ul>
          <li>
            Organizes itself to perform the work and deliver business value
          </li>
        </ul>

        <h4>Events</h4>
        <h5>Sprint</h5>
        <ul>
          <li>Iteration typically of 1-4 weeks length</li>
          <li>
            This is where the development work (code, test, review, …) occurs
          </li>
        </ul>

        <h5>Spring Planning Meeting</h5>
        <ul>
          <li>
            Select the stories the team believes it can commit to in a sprint
          </li>
          <li>
            Break the stories down into tasks and provide estimates for those
            tasks
          </li>
        </ul>

        <h5>Daily Scrum/Standup</h5>
        <ul>
          <li>
            Team members share progress with other team members (not the
            manager)
          </li>
          <li>
            Answer the three questions – “what did you do yesterday”, “what will
            you do today”, “do you have any roadblocks”
          </li>
          <li>
            Anyone may attend, only team members (people with skin in the game)
            may speak
          </li>
          <li>
            Scrum master uses the information from the standup to update
            burndown chart illustrating progress
          </li>
        </ul>

        <h5>Sprint Review</h5>
        <ul>
          <li>
            Product Owner plays the sprint’s work (without guidance) and
            provides feedback
          </li>
          <li>Developers may also demo work</li>
          <li>
            Team owns up to deficiencies with the product helping to build trust
            with the Product Owner
          </li>
        </ul>

        <h5>Sprint Retrospective</h5>
        <ul>
          <li>Team reviews what went well and what went poorly</li>
          <li>
            Use retrospection techniques to find potential for improvement.
          </li>
          <li>Pick one or two areas to focus for improvement</li>
        </ul>

        <a href="https://www.scrum.org">Scrum.org </a>
        </Container>
        <br></br>
        <br></br>
        </Container>
      </div>
    );
  }
}
