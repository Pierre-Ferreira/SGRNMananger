import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDatasource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDatasource(nextProps);
  }

  createDatasource(props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(props.employeesList);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const MapStateToProps = (state) => {
  const employeesList = _.map(state.employeesList, (val, uid) => {
    return { ...val, uid };
  });
  return ({
    employeesList
  });
};

export default connect(MapStateToProps, { employeesFetch })(EmployeeList);
