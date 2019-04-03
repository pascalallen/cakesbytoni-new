import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    params: state.resource.params,
});

class Order extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <div>{this.props.match.params.uniqueId}</div>
    )
  }
}

Order.propTypes = {
    params: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    {

    },
)(Order);
