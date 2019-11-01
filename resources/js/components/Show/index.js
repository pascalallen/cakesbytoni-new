import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchSingle, updateRecord } from '../../actions/resource';
import {Form, Button, Col, Alert} from 'react-bootstrap';
import moment from 'moment';
import {StyledRow, ImageDiv, StyledContainer} from './styles';
import { Helmet } from "react-helmet/es/Helmet";

const mapStateToProps = state => ({
  order: state.resource.single,
  params: state.resource.params,
  updated: state.resource.updated,
});

class Show extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      validated: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingle('orders', this.props.match.params.uniqueId);
  }

  handleChange(event) {
    this.setState({
      order: {
        [event.target.name]: event.target.value,
      }
    });
  }

  handleClick(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
    const { order } = this.props;
    this.props.updateRecord('orders', order.unique_id, this.state.order);
  }


  render(){
    const { validated } = this.state;
    const { order, updated } = this.props;

    return (
      <StyledContainer>
        <Helmet>
            <title>Cakes By Toni | Modify Order</title>
            <meta name="description" content="Organic. Gluten-free. Vegan. We only use premium ingredients with state of the art tools and techniques to deliver a treat like no other. Let us make the perfect cake for your next special occasion!" />
        </Helmet>
        <StyledRow>
          <Form
            noValidate
            validated={validated}
            className="form col-md-8"
          >
            <h1>Your Order</h1><a href="/" style={{float: "right", marginTop: "-40px"}} className="text-muted" >Home</a>
            {updated && <Alert variant="success">Thanks for the update! We're on it 😎</Alert>}
            <ImageDiv src="/images/ToniMarie-02.svg">
              <Form.Row>
                <Form.Group controlId="formBasicFirstName" className="col-md-4">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control name="first_name" defaultValue={order.first_name} required onChange={this.handleChange} />
                  <Form.Control.Feedback type="invalid">
                    Please provide your first name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicLastName" className="col-md-4">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control name="last_name" defaultValue={order.last_name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="col-md-4">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" defaultValue={order.email} required onChange={this.handleChange} />
                  <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                  <Form.Control.Feedback type="invalid">
                    Please provide your email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
            </ImageDiv>
            <Form.Row>
              <Form.Group controlId="formBasicInstructions" className="col-md-8">
                <Form.Label>Special Instructions</Form.Label>
                <Form.Control as="textarea" rows="8" name="instructions" defaultValue={order.instructions} onChange={this.handleChange} />
              </Form.Group>
              <Col md={4}>
                <Form.Group controlId="formBasicPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" name="phone_number" defaultValue={order.phone_number} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicProduct">
                  <Form.Label>What do you want?</Form.Label>
                  <Form.Control as="select" name="product" defaultValue={order.product} required onChange={this.handleChange}>
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
                  <Form.Control.Feedback type="invalid">
                    Please provide what you want.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicDate">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control type="date" name="due_date" defaultValue={moment(order.due_date).format("Y-MM-DD")} required onChange={this.handleChange} />
                  <Form.Control.Feedback type="invalid">
                    Please provide your due date.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicSubmit">
                  <Button variant="primary" type="button" onClick={e => this.handleClick(e)}>Submit</Button>
                </Form.Group>
              </Col>
            </Form.Row>
          </Form>
        </StyledRow>
      </StyledContainer>
    )
  }
}

export default connect(
    mapStateToProps,
    {
        fetchSingle,
        updateRecord,
    },
)(Show);
