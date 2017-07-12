# yp-eslintrc-base
The base eslint configuration object, described in the [NodeJS best practice page]


This module exports the base eslint configuration to help developers not have to duplicate the same eslint configuration across all projects.

To use this module, simply add .eslintrc.js to the root directory of the project, and add the following line:

## .eslintrc.js
```javascript
module.export = require('eslint-config-yp-base');
```

If needed, developers could also import this module and extend it into the one that they need.
```javascript
const eslintrc = require('eslint-config-yp-base');
/*
.... do whatever needed to the eslintrc object
*/
module.export = eslintrc;

```

## .eslintrc
```json
{
  "extends": "yp-base"
}
```

```json
{
  "extends": "yp-base",
  "rules": {
    "no-plusplus": 0,
    "no-underscore-dangle": 0,
    "no-use-before-define": ["error", { "functions": false }],
    ...
  }
}
```
