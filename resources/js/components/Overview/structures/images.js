import React from 'react';
import { Link } from 'react-router-dom';
import matchSorter from 'match-sorter';

export default [
  {
    Header: 'ID',
    accessor: 'id',
    width: 50,
    Cell: id => (<Link to={`/images/${id.value}`}>{id.value}</Link>),
    filterMethod: (filter, rows) =>
      matchSorter(rows, filter.value, { keys: ['id'] }),
    filterAll: true,
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Slug',
    accessor: 'slug',
  },
  {
    Header: 'Main',
    accessor: 'main',
  },
  {
    Header: 'Created At',
    accessor: 'created_at',
  },
  {
    Header: 'Updated At',
    accessor: 'created_at',
  },
];
