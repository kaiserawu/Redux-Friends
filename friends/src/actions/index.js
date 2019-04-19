import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = auth => dispatch => {
  dispatch({ type: LOGIN_START });
  console.log(auth);

  return axios.post('http://localhost:5000/api/login', auth)
    .then(res => {
      console.log('saving token, sending success case');
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      console.log('sending failure case');
      if (err.response && err.response.status === 403) {
        console.log('removing token');
        localStorage.removeItem('token');
      }
      dispatch({ type: LOGIN_FAILURE });
    })
}