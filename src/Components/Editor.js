import React, { useState } from 'react';
import CodeInput from './CodeInput';
import OutputDisplay from './OutputDisplay';

const Editor = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [output, setOutput] = useState('');

  const executeCode = async () => {
    try {
      const response = await fetch('/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ htmlCode, cssCode, jsCode }),
      });

      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      console.error('Error executing code:', error);
    }
  };

  return (
    <div className="editor">
      <h2>Step-by-Step Code Editor</h2>
      <CodeInput language="HTML" code={htmlCode} onChange={setHtmlCode} />
      <CodeInput language="CSS" code={cssCode} onChange={setCssCode} />
      <CodeInput language="JavaScript" code={jsCode} onChange={setJsCode} />
      <button onClick={executeCode}>Execute</button>
      <OutputDisplay output={output} />
    </div>
  );
};

export default Editor;
