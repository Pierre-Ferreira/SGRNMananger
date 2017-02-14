import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Button, Card, CardSection, Confirm } from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ value, prop });
    });
  }

  onButtonPress() {
    const { name, phone, shift, uid } = this.props;
    this.props.employeeSave({ name, phone, shift, uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props;
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPressFN={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPressFN={this.onTextPress.bind(this)}>
            Send Text
          </Button>
        </CardSection>

        <CardSection>
          <Button onPressFN={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire them?
        </Confirm>
      </Card>
    );
  }
}

const MapStateToProps = (state) => {
  return ({
    name: state.employees.name,
    phone: state.employees.phone,
    shift: state.employees.shift,
    uid: state.employees.uid
  });
};

export default connect(
  MapStateToProps,
  { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
