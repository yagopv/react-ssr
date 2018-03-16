import React from 'react';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';

// You can´t use the <Route /> components from react-router to SSR
// You need to use the react-router-config configuration
export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UserListPage,
    path: '/users'
  }
];
