// import {
//   EMP_NAME_CHANGE,
//   EMP_PHONE_CHANGE
// } from '../actions/types';
//
// const INITIAL_STATE = {
//   employeeName: '',
//   employeePhone: ''
// };
//
// export default (state = INITIAL_STATE, action) => {
// console.log('EMPState:', state);
//   switch (action.type) {
//       case EMP_NAME_CHANGE:
//         return { ...state, employeeName: action.payload };
//       case EMP_PHONE_CHANGE:
//         return { ...state, employeePhone: action.payload };
//     default:
//       return state;
//   }
// };
import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
console.log('EMPState:', state);
console.log('EMPaction:', action);
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload  = {prop:'phone', value:'082 234 9211'}
      // Thus use key interpolation to insert the payload into state.
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
