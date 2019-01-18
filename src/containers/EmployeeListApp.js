import React, { Component } from 'react';
import EmployeeList from '../components/EmployeeList';
import initialEmployees from '../initialEmployees';

class EmployeeListApp extends Component {
  state = {
    employees: initialEmployees,
  };

  handleDelete = (id) => {
    this.setState({
      employees: this.state.employees.filter((employee, i) => i !== id),
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="page-title">Employee Tracker</h1>
        <EmployeeList
          employees={this.state.employees}
          delete={this.handleDelete}
        />
      </div>
    );
  }
}

export default EmployeeListApp;
