import { combineReducers } from 'redux';
import AuthenticationReducers from './AuthenticationReducers';
import EmployeesReducers from './EmployeesReducers';

export default combineReducers({
  auth: AuthenticationReducers,
  employees: EmployeesReducers
});
