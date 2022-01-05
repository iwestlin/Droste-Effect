const droste = require('.')

droste({
  input: 'input.png',
  output: 'output.png',
  top: 710,
  left: 115,
  width: 270,
  // height: 200, // if no height set, will keep the ratio of w/h
  repeat: 3
}).then(console.log).catch(console.error)
