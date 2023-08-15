const express = require('express');
const bodyParser = require('body-parser');
const { NodeVM } = require('vm2');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Endpoint to execute code
app.post('/execute', (req, res) => {
  const { htmlCode, cssCode, jsCode } = req.body;

  const vm = new NodeVM({
    sandbox: {},
  });

  let output = '';
  try {
    const combinedCode = `${htmlCode}\n<style>${cssCode}</style>\n<script>${jsCode}</script>`;
    output = vm.run(combinedCode);
  } catch (error) {
    output = `Error: ${error.message}`;
  }

  res.json({ output });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
