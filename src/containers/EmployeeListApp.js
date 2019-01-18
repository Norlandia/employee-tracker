import React, { Component } from 'react';
import EmployeeList from '../components/EmployeeList';
import initialEmployees from '../initialEmployees';

class EmployeeListApp extends Component {
  state = {
    employees: initialEmployees,
  };

  render() {
    return (
      <div>
        <h1>Employee Tracker</h1>
        <EmployeeList employees={this.state.employees}/>
      </div>
    );
  }
}

export default EmployeeListApp;
