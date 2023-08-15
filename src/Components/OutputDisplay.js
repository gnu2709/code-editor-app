import React from 'react';

const OutputDisplay = ({ output }) => {
  return (
    <div className="output-display">
      <h3>Output</h3>
      <div>{output}</div>
    </div>
  );
};

export default OutputDisplay;
