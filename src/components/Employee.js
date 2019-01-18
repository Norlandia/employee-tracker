import React from 'react';

const Employee = (props) => {
  return (
    <tr className="employee">
      <td className="employee-name-job">
        <p className="employee-name">{props.employee.name}</p>
        <p className="employee-job">{props.employee.job ? props.employee.job : '&nbsp;'}</p>
      </td>
      <td className="employee-age">{props.employee.age}</td>
      <td className="employee-nickname">{props.employee.nick}</td>
      <td className="check-employee">
        <input
          type="checkbox"
          readOnly
          checked={props.employee.employee}
          className="employee-status"
        />
      </td>
      <td>
        <button className="delete button" onClick={() => props.delete(props.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Employee;
