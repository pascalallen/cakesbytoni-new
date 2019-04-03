import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSingle, updateRecord } from '../../actions/resource';
import {Form, Button, Col} from 'react-bootstrap';
import moment from 'moment';

const mapStateToProps = state => ({
    order: state.resource.single,
    params: state.resource.params,
});

class Order extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingle('orders', this.props.match.params.uniqueId);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick(event) {
    const { order } = this.props;
    this.props.updateRecord('orders', order.unique_id, this.state);
  }


  render(){
    const { order } = this.props;

    return (
      <Form className="form col-md-8" >
        <h1>Your Order</h1>
        <Form.Row>
          <Form.Group controlId="formBasicFirstName" className="col-md-4">
            <Form.Label>First Name</Form.Label>
            <Form.Control name="first_name" defaultValue={order.first_name} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicLastName" className="col-md-4">
            <Form.Label>Last Name</Form.Label>
            <Form.Control name="last_name" defaultValue={order.last_name} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="col-md-4">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" defaultValue={order.email} onChange={this.handleChange} />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="formBasicInstructions" className="col-md-8">
            <Form.Label>Special Instructions</Form.Label>
            <Form.Control as="textarea" cols="50" rows="8" name="instructions" defaultValue={order.instructions} onChange={this.handleChange} />
          </Form.Group>
          <Col md={4}>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" name="phone_number" defaultValue={order.phone_number} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicProduct">
              <Form.Label>What do you want?</Form.Label>
              <Form.Control as="select" name="product" defaultValue={order.product} onChange={this.handleChange}>
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
              <Form.Control type="date" name="due_date" defaultValue={moment(order.due_date).format("Y-MM-DD")} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicSubmit">
              <Button variant="primary" type="button" onClick={this.handleClick}>Submit</Button>
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    )
  }
}

Order.propTypes = {
    params: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    {
        fetchSingle,
        updateRecord,
    },
)(Order);
