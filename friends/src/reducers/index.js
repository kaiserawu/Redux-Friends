import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

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
      return {
        ...state,
        isLoggingIn: false,
        loginError: ''
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        loginError: 'Failed Login'
      }
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        friendsList: action.payload
      }
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;