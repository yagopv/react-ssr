import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
  // const res = await axios.get('http://react-ssr-api.herokuapp.com/users/xss'); // XSS attack

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};
