const eslintrc = require('../index');
const chai = require('chai');

const expect = chai.expect;

describe('The service', () => {
  it('should return the eslintrc object', () => {
    return expect(eslintrc).to.be.deep.equal({
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
        'no-use-before-define': ['error', {
          functions: false
        }]
      }
    });
  });
});
