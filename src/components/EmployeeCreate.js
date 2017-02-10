import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            lable="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={(text) => this.props.employeeUpdate({ props: 'name', value: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            lable="Phone"
            placeholder="555-5555"
            value={this.props.phone}
            onChangeText={(text) => this.props.employeeUpdate({ props: 'phone', value: text })}
          />
        </CardSection>
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
console.log('emSTATE:', state)
  const { name, phone } = state.employees;
  return ({
    name,
    phone
  });
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeCreate);
