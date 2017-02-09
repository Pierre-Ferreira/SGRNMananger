import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
// import * as actions from '../actions';
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

          <CardSection>
            <Button onPressFN={this.onLoginButtonPress.bind(this)}>
              Login
            </Button>
          </CardSection>
        </Card>
    );
  }
}

const MapStateToProps = (state) => {
console.log('state.auth:', state.auth)
  return ({
      email: state.auth.email,
      password: state.auth.password
  });
};

export default connect(
  MapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
