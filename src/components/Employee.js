import React from 'react';

const Employee = () => {
  return (
      <li>
        <span className="employee-name">Norlandia</span>
        <span className="employee-age">12</span>
        <span className="employee-nickname">Norlandia</span>
        <input type="checkbox" className="employee-status"></input>
        <button className="delete button">Delete</button>
      </li>
  );
}
 
export default Employee;
