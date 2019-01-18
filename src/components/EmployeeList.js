import React from 'react';
import Employee from './Employee';

const EmployeeList = (props) => {
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
        {props.employees.map((employee, index) => (
          <Employee
            key={index}
            id={index}
            employee={employee}
            delete={props.delete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
