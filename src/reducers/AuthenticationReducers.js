import {
  EMAIL_CHANGED,
  PASSWORD_CHANGE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_BUSY
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: '',
  error: '',
  loggingInUser: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state,
        user: action.payload,
        login_error: '',
        loggingInUser: false,
        email: '',
        password: ''
      };
    case LOGIN_USER_FAILURE:
      return { ...state,
        login_error: 'Authentication Failed.',
        password: '',
        loggingInUser: false
      };
    case LOGIN_USER_BUSY:
      return { ...state,
        login_error: '',
        loggingInUser: true
      };
    default:
      return state;
  }
};
