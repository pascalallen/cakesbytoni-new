import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {StyledRow, StyledImage} from './styles';

class Banner extends Component {
  render(){
    return (
      <StyledRow>
        <Col>
          <StyledImage src="/images/ToniMarie-01.svg" />
        </Col>
      </StyledRow>
    )
  }
}
export default Banner;
