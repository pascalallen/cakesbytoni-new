import React, {Component} from 'react';
import {Row, Col, Button, Image} from 'react-bootstrap';
import {StyledDiv, ImageDiv} from './styles';

class Description extends Component {
  render(){
    return (
      <StyledDiv>
        <Row>
          <Col md={6}>
            <h1>Cakes By Toni</h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequatur harum odit voluptate quidem, optio accusamus adipisci veniam culpa ad. Dolorem asperiores explicabo repellat in maxime nesciunt, recusandae consectetur? Quaerat.
          </Col>
            <Col md={6}>
              <ImageDiv src="/img/ToniMarie-02.svg">
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequatur harum odit voluptate quidem, optio accusamus adipisci veniam culpa ad. Dolorem asperiores explicabo repellat in maxime nesciunt, recusandae consectetur? Quaerat.</span>
              </ImageDiv>
            </Col>
        </Row>
      </StyledDiv>
    )
  }
}
export default Description;