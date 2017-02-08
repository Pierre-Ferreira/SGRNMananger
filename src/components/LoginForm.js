import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
// import * as actions from '../actions';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
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
            <Button>
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

export default connect(MapStateToProps, { emailChanged, passwordChanged })(LoginForm);
