import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAll } from '../../actions/resource';
import Image from "react-bootstrap/Image"
import {StyledSpinner} from './styles';
import Gallery from 'react-grid-gallery';
import { Helmet } from "react-helmet/es/Helmet";

const mapStateToProps = state => ({
  data: state.resource.all,
  fetched: state.resource.fetched,
  fetching: state.resource.fetching,
  params: state.resource.params,
  prev: state.resource.links.prev,
  next: state.resource.links.next,
});

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAll('images', {
      page_size: 1000,
    });
  }

  render() {
    const {
      data,
      fetched,
      params,
    } = this.props;

    let renderedData = [];

    if (fetched && Array.isArray(data)) {
      renderedData = data.map((item, i) => {
        return {
          src: `https://i.imgur.com/${item.imgur_id}.jpg`,
          thumbnail: `https://i.imgur.com/${item.imgur_id}.jpg`,
          thumbnailWidth: 320,
          // thumbnailHeight: 280,
          caption: ((item.name && item.name.length > 0) ? item.name : '') + ((item.description && item.description.length > 0) ? ` -- ${item.description}` : ''),
          alt: "/images/ToniMarie-01.svg",
          nano: "data:image/png;base64,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",
          customOverlay: <div style={{backgroundColor: "rgba(0, 0, 0, 0.3)", height: "100%", alignItems: "center", alignContent: "center", justifyContent: "center", display: "flex"}}>
            <Image
              key={i}
              src={`/images/ToniMarie-03.svg`}
              fluid
            />
          </div>,
        }
      });
    }

    return (
      <div style={{paddingRight: "15px", paddingLeft: "15px", width: "100%"}}>
        <Helmet>
            <title>Cakes By Toni | Gallery</title>
            <meta name="description" content="Organic. Gluten-free. Vegan. We only use premium ingredients with state of the art tools and techniques to deliver a treat like no other. Let us make the perfect cake for your next special occasion!" />
        </Helmet>
        <h1>Photos</h1><a href="/" style={{float: "right", marginTop: "-40px"}} className="text-muted" >Home</a>
        {this.props.fetching ?
          <StyledSpinner animation="grow" />
          :
          <Gallery
            images={renderedData}
            enableImageSelection={false}
          />
        }
      </div>
    );
  }
}

Overview.propTypes = {
  fetchAll: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  prev: PropTypes.string,
  next: PropTypes.string,
};

export default connect(
  mapStateToProps,
  {
    fetchAll,
  },
)(Overview);
