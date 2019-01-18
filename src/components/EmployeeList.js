import React from 'react';
import Employee from './Employee';

const EmployeeList = (props) => {
  return (
    <div>
      <table>
        <tr>
          <th>
            <p>Name</p>
            <p>(job title)</p>
          </th>
          <th>Age</th>
          <th>Nickname</th>
          <th>Employee</th>
          <th />
        </tr>
        {props.employees.map((employee, index) => (
          <Employee key={index} employee={employee} />
        ))}
      </table>
    </div>
  );
};

export default EmployeeList;
