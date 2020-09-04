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
} from "react-bootstrap";
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import NumericInput from "react-numeric-input";

import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

const stripePromise = loadStripe('pk_test_51HMY0fEd3ZxUQOxh20BNoEy4CSrSXrgHasSIJrln7bq9eJxea1xhfzdIJfipIZPK82EAcYZBGoHAba0ViHEL75vn00copwcpzI');

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
      movieTitle: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
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
              <option value="Sea Fever">Sea Fever</option>
              <option value="Howl's Moving Castle">Howl's Moving Castle</option>
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

            <Form.Check type="radio" label="10.00" />
            <Form.Check type="radio" label="11.00" />
            <Form.Check type="radio" label="12.00" />
            <Form.Check type="radio" label="13.00" />
            <Form.Check type="radio" label="14.00" />
            <Form.Check type="radio" label="15.00" />
          </Form.Group>

          <Form.Group>
            <Form.Label column="lg"></Form.Label>

            <Form.Check type="radio" label="16.00" />
            <Form.Check type="radio" label="17.00" />
            <Form.Check type="radio" label="18.00" />
            <Form.Check type="radio" label="19.00" />
            <Form.Check type="radio" label="20.00" />
            <Form.Check type="radio" label="21.00" />
          </Form.Group>
        </Form.Row>

        {/* <Form.Row>
          <Form.Group>
            <Form.Label column="lg">Adult</Form.Label>
            <NumericInput size={10} min={0} max={100} value={0} />
          </Form.Group>

          <Form.Group>
            <Form.Label column="lg">Child</Form.Label>
            <NumericInput size={10} min={0} max={100} value={0} />
          </Form.Group>

          <Form.Group>
            <Form.Label column="lg">Student</Form.Label>
            <NumericInput size={10} min={0} max={100} value={0} />
          </Form.Group>

          <Form.Group>
            <Form.Label column="lg">Senior</Form.Label>
            <NumericInput size={10} min={0} max={100} value={0} />
          </Form.Group>
        </Form.Row> */}

        <Form.Group id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="I have confirmed my movie choice"
          />
        </Form.Group>

        <Elements stripe={stripePromise} elements={CheckoutForm}>
          {/* Pass movieTitle as a prop */}
          <CheckoutForm movieTitle={this.props.movieTitle} />
        </Elements>

        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
    );
  }
}
