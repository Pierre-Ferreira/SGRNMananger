import {
  EMAIL_CHANGED,
  PASSWORD_CHANGE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  CREATE_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: ''
};

export default (state = INITIAL_STATE, action) => {
console.log('STATE:', state);
console.log('ACTION:', action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    case CREATE_USER_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_USER_FAILURE:
      return { ...state, login_error: action.payload };
    default:
      return state;
  }
};
