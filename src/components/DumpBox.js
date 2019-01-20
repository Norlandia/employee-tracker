import React from 'react';
import PropTypes from 'prop-types';

const DumpBox = ({ content }) => {
  return (
    <div className="textbox-container">
      <label htmlFor="textbox" className="textbox-title">
        Data dump
      </label>
      <textarea
        id="textbox"
        className="textbox"
        value={JSON.stringify(content).replace('},', '},\n')}
        readOnly
      />
    </div>
  );
};

DumpBox.propTypes = {
  content: PropTypes.array,
};

export default DumpBox;
