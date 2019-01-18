import React, { Component } from 'react';
import EmployeeList from '../components/EmployeeList';

class EmployeeListApp extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Employee Tracker</h1>
        <EmployeeList />
      </div>
    );
  }
}

export default EmployeeListApp;
