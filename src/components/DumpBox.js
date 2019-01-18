import React from 'react';

const DumpBox = () => {
  return (
    <div className="textbox-container">
      <label htmlFor="textbox" className="textbox-title">
        Data dump
      </label>
      <textarea id="textbox" className="textbox" readOnly />
    </div>
  );
};

export default DumpBox;
