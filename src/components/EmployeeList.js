import React from 'react';
import Employee from './Employee';
import PropTypes from 'prop-types';

const EmployeeList = ({ employees, deleteEmployee }) => {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th className="employee-name-job">
            <p className="employee-name">Name</p>
            <p className="employee-job">(job title)</p>
          </th>
          <th className="employee-age">Age</th>
          <th className="employee-nickname">Nickname</th>
          <th>Employee</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <Employee
            key={index}
            id={index}
            employee={employee}
            deleteEmployee={deleteEmployee}
          />
        ))}
      </tbody>
    </table>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.array,
  deleteEmployee: PropTypes.func,
};

export default EmployeeList;
