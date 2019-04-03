import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {StyledRow, StyledImage} from './styles';

class Banner extends Component {
  render(){
    return (
      <StyledRow>
        <Col md={12}>
          <StyledImage src="/img/ToniMarie-01.svg" />
        </Col>
      </StyledRow>
    )
  }
}
export default Banner;