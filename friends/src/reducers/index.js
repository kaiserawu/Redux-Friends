import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
  friendsList: [],
  isLoggingIn: false,
  loginError: ''
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        loginError: ''
      }
    case LOGIN_SUCCESS:
      console.log('in reducer, setting state success');
      return {
        ...state,
        isLoggingIn: false,
        loginError: ''
      }
    case LOGIN_FAILURE:
      console.log('in reducer, setting state failure');
      return {
        ...state,
        isLoggingIn: false,
        loginError: 'Failed Login'
      }
    default:
      return state;
  }
}

export default rootReducer;