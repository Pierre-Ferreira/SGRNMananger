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

import { EMPLOYEE_UPDATE } from './types';

// Rather than having multiple Action Creators we
// create one AC that handles all form input changes.
export const employeeUpdate = ({ props, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { props, value }
  };
};
