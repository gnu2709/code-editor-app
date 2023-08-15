import React from 'react';

const CodeInput = ({ language, code, onChange }) => {
  return (
    <div className="code-input">
      <h3>{language} Code</h3>
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        rows={10}
      />
    </div>
  );
};

export default CodeInput;
