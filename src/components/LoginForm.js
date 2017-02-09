import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';

import {
  emailChanged,
  passwordChanged,
  loginUser
} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginButtonPress() {
    this.props.loginUser({
      email: this.props.email,
      password: this.props.password
    });
  }

  buttonOrSpinner() {
    if (this.props.loggingInUser) {
      return <Spinner size={'small'} />;
    }
    return (
        <Button onPressFN={this.onLoginButtonPress.bind(this)}>
          Login
        </Button>
    );
  }

  render() {
    return (
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              value={this.props.password}
              onChangeText={this.onPasswordChange.bind(this)}
              secureTextEntry={true}
              label="Password"
              placeholder="password"
            />
          </CardSection>

          <Text style={styles.loginError}>{this.props.login_error}</Text>

          <CardSection>
            {this.buttonOrSpinner()}
          </CardSection>

        </Card>
    );
  }
}

const styles = {
  loginError: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
};

const MapStateToProps = (state) => {
console.log('state.auth:', state.auth);
  return ({
      email: state.auth.email,
      password: state.auth.password,
      login_error: state.auth.login_error,
      loggingInUser: state.auth.loggingInUser
  });
};

export default connect(
  MapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
