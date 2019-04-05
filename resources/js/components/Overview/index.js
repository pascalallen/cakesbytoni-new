import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAll } from '../../actions/resource';
import Image from "react-bootstrap/Image";
import {StyledCol} from "../HomePage/ImageReel/styles";

const mapStateToProps = state => ({
  data: state.resource.all,
  fetched: state.resource.fetched,
  params: state.resource.params,
});

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchAll(this.props.match.params.resource);
    this.props.fetchAll('images');
  }

  render() {
    const {
      data,
      fetched,
      params,
    } = this.props;

    let renderedData = [];

    if (fetched && Array.isArray(data)) {
      renderedData = data.map((item) => {
        return item;
      });
    }

    return (
      <div style={{paddingRight: "15px", paddingLeft: "15px"}}>
        <h1>Images</h1><a href="/" style={{float: "right", marginTop: "-40px"}} className="text-muted" >Home</a>
        {data.map((item, i) => <Image
          key={i}
          src={`https://i.imgur.com/${item.imgur_id}.jpg`}
          fluid
        />)}
      </div>
    );
  }
}

Overview.propTypes = {
  fetchAll: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  {
    fetchAll,
  },
)(Overview);
