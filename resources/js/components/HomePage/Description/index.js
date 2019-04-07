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
            <span>Organic. Gluten-free. Vegan. We only use premium ingredients with state of the art tools and techniques to deliver a treat like no other. Let us make the perfect cake for your next special occasion! <a href="/photos" className="text-muted"><i>See more here.</i></a></span>
          </ImageDiv>
        </Col>
      </StyledRow>
    )
  }
}
export default Description;
