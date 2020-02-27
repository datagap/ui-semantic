# UI Semantic husky hooks

Create a `.huskyrc.js` file at the root of your project with the following content:

## Basic setup:

```js
const { uiHooks, generateHuskyConfig } = require('./node_modules/@dgx/coding-standards/husky/husky.js');
const huskyHooks = generateHuskyConfig(uiHooks());
module.exports = huskyHooks;
```

## Extend hooks setup

```js
const { uiHooks, generateHuskyConfig } = require('./node_modules/@dgx/coding-standards/husky/husky.js');
const hooks = uiHooks();
hooks['pre-commit'] = [...hooks['pre-commit'], 'npm audit']; // example of adding a hook
const huskyHooks = generateHuskyConfig(hooks);
module.exports = huskyHooks;
```
