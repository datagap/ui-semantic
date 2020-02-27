// @ts-check
const { uiHooks, generateHuskyConfig } = require('./src/platform/coding-standards/husky/husky.js');
const huskyHooks = generateHuskyConfig(uiHooks());
module.exports = huskyHooks;
