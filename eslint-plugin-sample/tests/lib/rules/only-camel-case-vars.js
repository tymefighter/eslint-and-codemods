
'use strict';

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/only-camel-case-vars');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6, sourceType: 'module' } });

ruleTester.run('only-camel-case-vars', rule, {
  valid: [
    { 
      code: 
      `
        const SOME_CONSTANT = 123;
      `
    },
    { 
      code: 
      `
        function someMockFunction() {
          const innerConstant = 'abcd';
        }
      `
    },
    { 
      code: 
      `
        const arrowFn = () => {
          const value = false;
        }
      `
    }
  ],

  invalid: [
    {
      code:
      `
        function someFunc() {
          const INNER_VAR = 'some mock string value';
        }
      `,
      errors: [
        {
          message: 'Variable name INNER_VAR is not in camel case',
        }
      ]
    },
    {
      code:
      `
        const arrowFunc = () => {
          const SOME_OTHER_VARIABLE = 5005;
        }
      `,
      errors: [
        {
          message: 'Variable name SOME_OTHER_VARIABLE is not in camel case',
        }
      ]
    }
  ]
})