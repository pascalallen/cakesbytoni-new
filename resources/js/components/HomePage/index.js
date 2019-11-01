import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import ImageReel from './ImageReel';
import Description from './Description';
import OrderForm from './OrderForm';
import {StyledContainer} from './styles';
import { Helmet } from "react-helmet/es/Helmet";

class HomePage extends React.Component {
  render() {
    return (
      <StyledContainer fluid>
        <Helmet>
            <title>Cakes By Toni | Welcome</title>
            <meta name="description" content="Organic. Gluten-free. Vegan. We only use premium ingredients with state of the art tools and techniques to deliver a treat like no other. Let us make the perfect cake for your next special occasion!" />
        </Helmet>
        <Banner />
        <ImageReel />
        <Description />
        <OrderForm />
      </StyledContainer>
    );
  }
}

export default connect()(HomePage);
