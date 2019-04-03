import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import ImageReel from './ImageReel';
import Description from './Description';
import OrderForm from './OrderForm';
import {StyledContainer} from './styles';

class HomePage extends React.Component {
  render() {
    return (
      <StyledContainer fluid>
        <Banner />
        <ImageReel />
        <Description />
        <OrderForm />
      </StyledContainer>
    );
  }
}

export default connect()(HomePage);
