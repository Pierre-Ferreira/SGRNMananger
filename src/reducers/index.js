import { combineReducers } from 'redux';
import AuthenticationReducers from './AuthenticationReducers';
import EmployeesFormReducers from './EmployeesFormReducers';
import EmployeesReducers from './EmployeesReducers';

export default combineReducers({
  auth: AuthenticationReducers,
  employees: EmployeesFormReducers,
  employeesList: EmployeesReducers
});
