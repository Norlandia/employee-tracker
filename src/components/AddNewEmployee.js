import React from 'react';

const AddNewEmployee = (props) => {
  const modalClass = props.show ? 'modal show' : 'modal hide';

  return (
    <div className={modalClass}>
      <form className="modal-main">
        <label> Name
          <input type="text" className="text-input"/>
        </label>
        <label> Job title
          <input type="text" className="text-input"/>
        </label>
        <label> Age
          <input type="text" className="text-input"/>
        </label>
        <label> Nickname
          <input type="text" className="text-input"/>
        </label>
        <label> Employee
          <input type="checkbox" className="input-checkbox"/>
        </label>
        
        <button type="submit" className="ok-button">
          Ok
        </button>
        <button className="cancel-button" onClick={() => props.close()}>Cancel</button>
      </form>
    </div>
  );
};

export default AddNewEmployee;
