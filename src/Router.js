import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key='main'>
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employee List"
          rightTitle="ADD"
          onRight={() => Actions.employeeCreate()}

        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
          // rightTitle="ADD"
          // onRight={() => Action.}
        />
      </Scene>
      <Scene key='auth'>
        <Scene
          key="login"
          component={LoginForm}
          title="Please login"
          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
