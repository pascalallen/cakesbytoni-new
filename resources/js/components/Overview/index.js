import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { fetchUser } from '../../actions/user';
import { fetchAll } from '../../actions/resource';

import structure from './structures';

const mapStateToProps = state => ({
  data: state.resource.data,
  fetched: state.resource.fetched,
  params: state.resource.params,
  // user: state.user.user,
});

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAll(this.props.match.params.resource);
  }

  render() {
    const {
      data, fetched, params,
    } = this.props;

    let renderedData = [];

    if (fetched && Array.isArray(data)) {
      renderedData = data.map((item) => {
        return item;
      });
    }

    return (
      <div>
        <ReactTable
          filterable
          data={renderedData}
          columns={structure(this.props.match.params.resource)}
          manual
          pages={params.pages}
          loading={params.loading} // Display the loading overlay when we need it
          onFetchData={this.updateTable}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

Overview.propTypes = {
  fetchAll: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  params: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  {
    fetchUser,
    fetchAll,
  },
)(Overview);
