module.exports = {
  extends: 'airbnb-base',
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  rules: {
    'class-methods-use-this': 0,
    'comma-dangle': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': ['error', { functions: false }]
  }
};
