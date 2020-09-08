import React from "react";
import "./css/App.css";

import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import {
  Button,
  Col,
  Row,
  Form,
  InputGroup,
  FormControl,
  FormGroup,
  Container,
} from "react-bootstrap";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import NumericInput from "react-numeric-input";

import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

const stripePromise = loadStripe(
  "pk_test_51HMY0fEd3ZxUQOxh20BNoEy4CSrSXrgHasSIJrln7bq9eJxea1xhfzdIJfipIZPK82EAcYZBGoHAba0ViHEL75vn00copwcpzI"
);

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}
const FORMAT = "dd/MM/yyyy";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: "",
      movie: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      movie: event.target.value,
    });
  };

  renderSwitch() {
    const movie = this.state.movie;
    switch (movie) {
      case "Gremlins":
        return <Form.Check type="radio" label="7:30pm" />;

      case "Goonies":
        return <Form.Check type="radio" label="7:30pm" />;

      case "IT":
        return <Form.Check type="radio" label="10:30pm" />;

      case "Hellraiser":
        return <Form.Check type="radio" label="10:30pm" />;

      default:
        return <Form.Check type="radio" label="4:00pm" />;
    }
  }

  render() {
    return (
      <Container className="cntr_main_qacinema">
        <Container className="cntr_insidemain_qacinema">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label column="lg">Movie</Form.Label>
                <Form.Control
                  as="select"
                  title="Choose..."
                  defaultValue="Choose..."
                  name="movieTitle"
                  onChange={this.handleChange}
                >
                  {/* <option>Choose...</option> */}
                  <option value="Gremlins">Gremlins</option>
                  <option value="Hellraiser">Hellraiser</option>
                  <option value="Goonies">Goonies</option>
                  <option value="Spririted Away">Spririted Away</option>
                  <option value="IT">IT</option>
                  <option value="Howl's Moving Castle">
                    Howl's Moving Castle
                  </option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label column="lg">Date</Form.Label>
                <DayPickerInput
                  formatDate={formatDate}
                  format={FORMAT}
                  parseDate={parseDate}
                  placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label column="lg">Time</Form.Label>
                {this.renderSwitch()}
              </Form.Group>
            </Form.Row>
            <br/>
            <br/>
            <Elements stripe={stripePromise} elements={CheckoutForm}>
              {/* Pass movieTitle as a prop */}
              <CheckoutForm movieTitle={this.props.movieTitle} />
            </Elements>
          </Form>
        </Container>
        <br/>
        <br/>
      </Container>
    );
  }
}
