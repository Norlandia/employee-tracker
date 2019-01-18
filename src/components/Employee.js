import React from 'react';

const Employee = () => {
  return (
    <tr className="employee">
      <td className="employee-name-job">
        <p className="employee-name">Nori</p>
        <p className="employee-job">Chef</p>
      </td>
      <td className="employee-age">12</td>
      <td className="employee-nickname">Norlandia</td>
      <td>
        <input type="checkbox" className="employee-status" />
      </td>
      <td>
        <button className="delete button">Delete</button>
      </td>
    </tr>
  );
};

export default Employee;
