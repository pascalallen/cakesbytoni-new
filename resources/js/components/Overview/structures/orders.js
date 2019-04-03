import React from 'react';
import { Link } from 'react-router-dom';
import matchSorter from 'match-sorter';

  // `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  // `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  // `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  // `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  // `product` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  // `instructions` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  // `due_date` date NOT NULL,
  // `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  // `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  // `image` blob,
  // `completed` tinyint(1) NOT NULL,
  // `unique_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  // `created_at` timestamp NULL DEFAULT NULL,
  // `updated_at` timestamp NULL DEFAULT NULL,

  export default [
    {
      Header: 'ID',
      accessor: 'id',
      width: 50,
      Cell: id => (<Link to={`/orders/${id.value}`}>{id.value}</Link>),
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ['id'] }),
      filterAll: true,
    },
    {
      Header: 'First Name',
      accessor: 'first_name',
    },
    {
      Header: 'Last Name',
      accessor: 'last_name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Product',
      accessor: 'product',
    },
    {
      Header: 'Due Date',
      accessor: 'due_date',
    },
    {
      Header: 'Phone Number',
      accessor: 'phone_number',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'Completed',
      accessor: 'completed',
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
