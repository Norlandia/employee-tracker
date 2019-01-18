import React, { Component } from 'react';
import EmployeeList from '../components/EmployeeList';
import initialEmployees from '../initialEmployees';
import AddNewEmployee from '../components/AddNewEmployee';

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
    e.preventDefeault();
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="page-title">Employee Tracker</h1>
        <button className="add-button" onClick={() => this.showModal()}>Add</button>
        <AddNewEmployee show={this.state.showModal} close={this.hideModal}/>
        <EmployeeList
          employees={this.state.employees}
          delete={this.handleDelete}
        />
      </div>
    );
  }
}

export default EmployeeListApp;
