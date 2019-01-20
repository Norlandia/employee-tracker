import React from 'react';
import PropTypes from 'prop-types';

const Employee = ({ id, employee, deleteEmployee }) => {
  return (
    <tr className="employee">
      <td className="employee-name-job">
        <p className="employee-name">{employee.name}</p>
        <p className="employee-job">{employee.job ? employee.job : '\xa0'}</p>
      </td>
      <td className="employee-age">{employee.age}</td>
      <td className="employee-nickname">{employee.nick}</td>
      <td className="check-employee">
        <input
          type="checkbox"
          readOnly
          checked={employee.employee}
          className="employee-status"
        />
      </td>
      <td>
        <button className="delete button" onClick={() => deleteEmployee(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

Employee.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string,
    job: PropTypes.string,
    age: PropTypes.number,
    nick: PropTypes.string,
    employee: PropTypes.bool,
  }),
  id: PropTypes.number,
};

export default Employee;
