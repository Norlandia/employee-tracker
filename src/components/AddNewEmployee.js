import React from 'react';
import PropTypes from 'prop-types';

const AddNewEmployee = ({ show, onSubmit, close }) => {
  const modalClass = show ? 'modal show' : 'modal hide';

  return (
    <div className={modalClass}>
      <form
        id="add-employee"
        className="modal-main"
        onSubmit={(e) => onSubmit(e)}
      >
        <label>
          Name*
          <input type="text" className="text-input" />
        </label>
        <label>
          Job title
          <input type="text" className="text-input" />
        </label>
        <label>
          Age
          <input type="text" className="text-input" />
        </label>
        <label>
          Nickname
          <input type="text" className="text-input" />
        </label>
        <label>
          Employee
          <input type="checkbox" className="input-checkbox" />
        </label>

        <button type="submit" className="ok-button">
          Ok
        </button>
        <button className="delete delete-modal" onClick={(e) => close(e)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

AddNewEmployee.propTypes = {
  show: PropTypes.bool,
  onSubmit: PropTypes.func,
  close: PropTypes.func,
};

export default AddNewEmployee;
