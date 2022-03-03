import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from ".";

class NewOrderForm extends React.Component {
  state = {
    id: 0,
    contact: "",
    agency: "",
    company: "",
    deadline: ""
  };

  componentDidMount() {
    if (this.props.order) {
      const { id, contact, agency, company, deadline } = this.props.student;
      this.setState({ id, contact, agency, company, deadline });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createOrder = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editOrder = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };
  // check the current value of each field in order to 
  // determine if they’re going to be filled with the value of the 
  // state (in case any exists, for editing) or not (when creating a new student)
  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.order ? this.editOrder : this.createOrder}>
        <FormGroup>
          <Label for="id">ID:</Label>
          <Input
            type="text"
            name="id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.id)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contact">Contact:</Label>
          <Input
            type="text"
            name="contact"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.contact)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="agency">Agency:</Label>
          <Input
            type="text"
            name="agency"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.agency)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="company">Company:</Label>
          <Input
            type="text"
            name="company"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.company)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="deadline">Deadline:</Label>
          <Input
            type="date"
            name="deadline"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.deadline)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewOrderForm;