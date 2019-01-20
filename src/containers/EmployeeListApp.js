import React, { Component } from 'react';
import EmployeeList from '../components/EmployeeList';
import initialEmployees from '../initialEmployees';
import AddNewEmployee from '../components/AddNewEmployee';
import DumpBox from '../components/DumpBox';

class EmployeeListApp extends Component {
  state = {
    employees: initialEmployees,
    showModal: false,
    dump: [],
  };

  handleDelete = (id) => {
    const deletedEmployee = {
      action: 'DELETE',
      time: new Date().getTime(),
      ...this.state.employees.splice(id, 1)[0],
    };

    this.setState({
      employees: this.state.employees.filter((employee, i) => i !== id),
      dump: [deletedEmployee, ...this.state.dump],
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

    this.clearForm();
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

    const newEmployeeDump = {
      action: 'ADD',
      time: new Date().getTime(),
      ...newEmployee,
    };
    
    if (newEmployee.name !== '') {
      this.setState({
        employees: [newEmployee, ...this.state.employees],
        showModal: false,
        dump: [newEmployeeDump, ...this.state.dump],
      });
    } else {
      alert('Name field is required!');
    }

    this.clearForm();
  };

  clearForm = () => {
    document.getElementById('add-employee').reset();
  };

  render() {
    console.log(this.state.dump);

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
        <DumpBox content={this.state.dump} />
      </div>
    );
  }
}

export default EmployeeListApp;
