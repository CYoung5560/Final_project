import React from "react";
import "./css/App.css";
import "./css/signin.css";
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
} from "react-bootstrap";

import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

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
  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label column="lg">Movie</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Gremlins</option>
              <option>Hellraiser</option>
              <option>Goonies</option>
              <option>Spririted Away</option>
              <option>Sea Fever</option>
              <option>Howl's Moving Castle</option>
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

            <Form.Check type="radio" label="10.00am" />
            <Form.Check type="radio" label="10.00am" />
            <Form.Check type="radio" label="10.00am" />
            <Form.Check type="radio" label="10.00am" />
            <Form.Check type="radio" label="10.00am" />
            <Form.Check type="radio" label="10.00am" />
            
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group>
            
          </Form.Group>
        </Form.Row>
        
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="I have confirmed my movie choice" />
        </Form.Group>

        <Form method="post" action="mailto:nilay1989@me.com">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <input type="submit" value="Send Email" />
        </Form>
      </Form>
    );
  }
}
