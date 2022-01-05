# Droste Effect
https://en.wikipedia.org/wiki/Droste_effect

input:
![](./input.png)

output:
![](./output.png)

[demo.js](./demo.js):
```js
const droste = require('.')

droste({
  input: 'input.png',
  output: 'output.png',
  top: 710,
  left: 115,
  width: 270,
  repeat: 3
}).then(console.log).catch(console.error)
```

FYI, you might want to use https://easydroste.app/ or https://github.com/javierbyte/droste-creator 😂
