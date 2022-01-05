const droste = require('.')

droste({
  input: 'input.png',
  output: 'output.png',
  top: 710,
  left: 115,
  width: 270,
  repeat: 3
}).then(console.log).catch(console.error)
