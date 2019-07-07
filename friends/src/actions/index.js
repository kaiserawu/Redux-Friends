import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = auth => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios.post('http://localhost:5000/api/login', auth)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      if (err.response && err.response.status === 403) {
        localStorage.removeItem('token');
      }
      dispatch({ type: LOGIN_FAILURE });
    })
}

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_START });

  axios.get('http://localhost:5000/api/friends', {
    headers: { Authorization: localStorage.getItem('token') }
  })
    .then(res => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.status === 403) {
        localStorage.removeItem('token');
      }

      dispatch({
        type: FETCH_FAILURE,
        payload: err.response
      })
    })
}