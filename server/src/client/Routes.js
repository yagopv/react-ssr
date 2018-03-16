import React from 'react';
import Home from './components/Home';
import UserList, { loadData } from './components/UserList';

// You can´t use the <Route /> components from react-router to SSR
// You need to use the react-router-config configuration
export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UserList
  }
];
