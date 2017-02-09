import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='auth'>
        <Scene
          key="login"
          component={LoginForm}
          title="Please login"
          initial
        />
      </Scene>
      <Scene key='main'>
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employee List"
          rightTitle="ADD"
          onRight={() => console.log("RIGHT!")}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
