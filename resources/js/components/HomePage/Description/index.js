import React, {Component} from 'react';
import {Row, Col, Button, Image} from 'react-bootstrap';
import {StyledRow, ImageDiv} from './styles';

class Description extends Component {
  render(){
    return (
      <StyledRow>
        <Col md={6}>
            <ImageDiv src="/images/ToniMarie-02.svg">
                <h1>Cakes By Toni</h1>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequatur harum odit voluptate quidem, optio accusamus adipisci veniam culpa ad. Dolorem asperiores explicabo repellat in maxime nesciunt, recusandae consectetur? Quaerat.</span>
            </ImageDiv>
        </Col>
      </StyledRow>
    )
  }
}
export default Description;
