import React from 'react';

const Employee = (props) => {
  return (
    <tr className="employee">
      <td className="employee-name-job">
        <p className="employee-name">{props.employee.name}</p>
        <p className="employee-job">{props.employee.job}</p>
      </td>
      <td className="employee-age">{props.employee.age}</td>
      <td className="employee-nickname">{props.employee.nick}</td>
      <td>
        <input
          type="checkbox"
          checked={props.employee.employee}
          className="employee-status"
        />
      </td>
      <td>
        <button className="delete button">Delete</button>
      </td>
    </tr>
  );
};

export default Employee;
