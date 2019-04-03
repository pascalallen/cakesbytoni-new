import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledCol, ImageText, StyledRow } from './styles';
import { fetchAll } from '../../actions/resource';

const mapStateToProps = state => ({
  data: state.resource.data,
  fetched: state.resource.fetched,
});

class ImageReel extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAll('images', {
      page_size: 4,
      random: true,
    });
  }

  render(){
    const {
      data, fetched,
    } = this.props;

    const key_points = [
      'Vegan',
      'Non-GMO',
      'Gluten-Free',
      'Organic',
    ];

    return (
      <StyledRow>
        {fetched && data.map((item, i) => (
          <StyledCol
            md={4}
            key={i}
            src={`https://i.imgur.com/${item.imgur_id}.jpg`}
          >
            <ImageText>{key_points[i]}</ImageText>
          </StyledCol>
        ))}
      </StyledRow>
    )
  }
}

ImageReel.propTypes = {
  fetchAll: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default connect(
  mapStateToProps,
  {
    fetchAll,
  },
)(ImageReel);