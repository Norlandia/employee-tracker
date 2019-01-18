import React from 'react';
import Employee from './Employee';

const EmployeeList = () => {
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
        <Employee />
      </table>
    </div>
  );
};

export default EmployeeList;
