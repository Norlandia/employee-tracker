import React, { Component } from 'react';
import EmployeeList from '../components/EmployeeList';
import initialEmployees from '../initialEmployees';
import AddNewEmployee from '../components/AddNewEmployee';
import DumpBox from '../components/DumpBox';

class EmployeeListApp extends Component {
  state = {
    employees: initialEmployees,
    showModal: false,
  };

  handleDelete = (id) => {
    this.setState({
      employees: this.state.employees.filter((employee, i) => i !== id),
    });
  };

  showModal = () => {
    this.setState({
      showModal: true,
    });
  };

  hideModal = (e) => {
    e.preventDefault();
    this.setState({
      showModal: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      name: e.target[0].value,
      job: e.target[1].value,
      age: e.target[2].value,
      nick: e.target[3].value,
      employee: e.target[4].checked,
    };

    this.setState({
      employees: [...this.state.employees, newEmployee],
      showModal: false,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="page-title">Employee Tracker</h1>
        <button className="add-button" onClick={() => this.showModal()}>
          Add
        </button>
        <AddNewEmployee
          onSubmit={this.handleSubmit}
          show={this.state.showModal}
          close={this.hideModal}
        />
        <EmployeeList
          employees={this.state.employees}
          delete={this.handleDelete}
        />
        <DumpBox />
      </div>
    );
  }
}

export default EmployeeListApp;
