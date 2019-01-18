import React from 'react';

const DumpBox = (props) => {
  return (
    <div className="textbox-container">
      <label htmlFor="textbox" className="textbox-title">
        Data dump
      </label>
      <textarea
        id="textbox"
        className="textbox"
        value={JSON.stringify(props.content)}
        readOnly
      />
    </div>
  );
};

export default DumpBox;
