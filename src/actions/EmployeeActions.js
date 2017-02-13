// import {
//   EMP_NAME_CHANGE,
//   EMP_PHONE_CHANGE
// } from './types';
//
// export const employeeNameChanged = (text) => {
//   return { type: EMP_NAME_CHANGE, payload: text };
// };
//
// export const employeePhoneChanged = (text) => {
//   return { type: EMP_PHONE_CHANGE, payload: text };
// };
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

// Rather than having multiple Action Creators we
// create one AC that handles all form input changes.
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => { // Fake Thunk call.
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
