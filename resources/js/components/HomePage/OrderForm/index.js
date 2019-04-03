import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledDiv } from './styles';
import {Form, Button, Col} from 'react-bootstrap';
import { newRecord } from '../../actions/resource';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      instructions: '',
      phone_number: '',
      product: 'chocolateCake',
      due_date: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.props.newRecord('orders', this.state);
    event.preventDefault();
  }

  render(){
    return (
      <StyledDiv>
        <Form method="POST" className="form col-md-8" onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group controlId="formBasicFirstName" className="col-md-4">
              <Form.Label>First Name</Form.Label>
              <Form.Control name="first_name" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicLastName" className="col-md-4">
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="last_name" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="col-md-4">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" onChange={this.handleChange} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="formBasicInstructions" className="col-md-8">
              <Form.Label>Special Instructions</Form.Label>
              <Form.Control as="textarea" cols="50" rows="8" name="instructions" onChange={this.handleChange} />
            </Form.Group>
            <Col md={4}>
              <Form.Group controlId="formBasicPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" name="phone_number" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicProduct">
                <Form.Label>What do you want?</Form.Label>
                <Form.Control as="select" name="product" onChange={this.handleChange}>
                  <optgroup label="Cakes">
                    <option value="chocolateCake">Chocolate</option>
                    <option value="vanillaCake">Vanilla</option>
                    <option value="funfettiCake">Funfetti</option>
                  </optgroup>
                  <optgroup label="Cookies">
                    <option value="chocolateCookies">Chocolate</option>
                    <option value="peanutButterCookies">Peanut Butter</option>
                    <option value="sugarCookies">Sugar</option>
                    <option value="mAndMCookies">M &amp; M</option>
                  </optgroup>
                  <optgroup label="Cupcakes">
                    <option value="chocolateCupcakes">Chocolate</option>
                    <option value="vanillaCupcakes">Vanilla</option>
                    <option value="funfettiCupcakes">Funfetti</option>
                  </optgroup>
                  <option value="0">Other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" name="due_date" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicSubmit">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Col>
          </Form.Row>
        </Form>
      </StyledDiv>
    )
  }
}

OrderForm.propTypes = {
  newRecord: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    newRecord,
  },
)(OrderForm);