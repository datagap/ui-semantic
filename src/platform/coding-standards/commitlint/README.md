# UI Semantic commitlint config

Create a `commitlint.config.js` file at the root of your project with the following content:

```js
var defaultConfig = require('./node_modules/@dgx/coding-standards/commitlint/commitlint.config.js');
module.exports = defaultConfig;
```