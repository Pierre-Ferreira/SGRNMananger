import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';


class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDatasource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDatasource(nextProps);
  }

  createDatasource(props) {
    const ds = new ListView.Datasource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(props.employeeList);
  }

  render() {
    return (
      <View>
        <Text>Employee List</Text>
                <Text>Employee List</Text>
                        <Text>Employee List</Text>
      </View>
    );
  }
}

const MapStateToProps = (state) => {
  return ({
    employeeList: state.employeeList
  });
};

export default connect(MapStateToProps, { employeesFetch })(EmployeeList);
