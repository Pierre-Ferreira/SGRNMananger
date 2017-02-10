import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_BUSY,
  EMP_NAME_CHANGE,
  EMP_PHONE_CHANGE
} from './types';

export const emailChanged = (text) => {
  return { type: EMAIL_CHANGED, payload: text };
};

export const passwordChanged = (text) => {
  return { type: PASSWORD_CHANGE, payload: text };
};

export const employeeNameChanged = (text) => {
  return { type: EMP_NAME_CHANGE, payload: text };
};

export const employeePhoneChanged = (text) => {
  return { type: EMP_PHONE_CHANGE, payload: text };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_BUSY });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAILURE
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
