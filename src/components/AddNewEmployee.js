import React from 'react';

const AddNewEmployee = (props) => {
  const modalClass = props.show ? 'modal show' : 'modal hide';

  return (
    <div className={modalClass}>
      <form className="modal-main">
        <label> Name
          <input type="text"/>
        </label>
        <label> Job title
          <input type="text"/>
        </label>
        <label> Age
          <input type="text"/>
        </label>
        <label> Nickname
          <input type="text"/>
        </label>
        <label> Employee
          <input type="checkbox"/>
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
