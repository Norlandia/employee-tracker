import React, { Component } from 'react';
import EmployeeList from '../components/EmployeeList';
import initialEmployees from '../initialEmployees';
import AddNewEmployee from '../components/AddNewEmployee';
import DumpBox from '../components/DumpBox';
import AgeGraph from '../components/AgeGraph';

class EmployeeListApp extends Component {
  state = {
    employees: initialEmployees,
    showModal: false,
    dump: [],
    showGraph: false,
  };

  handleDelete = (id) => {
    const deletedEmployee = {
      action: 'DELETE',
      time: new Date().getTime(),
      ...this.state.employees.filter((employee, i) => i === id),
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

  getAgeDistribution = () => {
    const ageFrequency = {};

    const ages = this.state.employees
      .map((employee) => employee.age)
      .filter((age) => !isNaN(age));

    ages.forEach((age) =>
      ageFrequency[age] ? ++ageFrequency[age] : (ageFrequency[age] = 1)
    );

    return Object.entries(ageFrequency).map((e) => {
      return { age: e[0], count: e[1] };
    });
  };

  handleGraph = () => {
    this.setState({
      showGraph: !this.state.showGraph,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="page-title">Employee Tracker</h1>
        <button className="add-button" onClick={() => this.showModal()}>
          Add
        </button>
        <AgeGraph
          ages={this.getAgeDistribution()}
          show={this.state.showGraph}
        />
        <button className="graph-button" onClick={() => this.handleGraph()}>
          Graph
        </button>
        <AddNewEmployee
          onSubmit={this.handleSubmit}
          show={this.state.showModal}
          close={this.hideModal}
        />
        <EmployeeList
          employees={this.state.employees}
          deleteEmployee={this.handleDelete}
        />
        <DumpBox content={this.state.dump} />
      </div>
    );
  }
}

export default EmployeeListApp;
