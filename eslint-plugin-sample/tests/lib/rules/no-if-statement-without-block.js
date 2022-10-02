
'use strict';

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/no-if-statement-without-block');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6, sourceType: 'module' } });

ruleTester.run('no-if-statement-without-block', rule, {
  valid: [
    {
      code: 
      `
        if(1 !== 2) {
          const x = 123;
        }
      `
    },
    {
      code: 
      `
        if(1 !== 2) {
          const x = 123;
        }
        else if(3 === 4) {
          console.log('abc');
        }
      `
    },
    {
      code: 
      `
        if(1 !== 2) {
          const x = 123;
        }
        else if(3 === 4) {
          console.log('abc');
        }
        else {
          let a = 5 + 10;
        }
      `
    }
  ],

  invalid: [
    {
      code: 
      `
        let x;
        if(1 !== 2)
          x = 10;
      `,
      errors: [{
        message: 'If Statement must have a block body'
      }]
    },
    {
      code: 
      `
        let y = 0;
        if(1 !== 2) {
          const x = 10;
        }
        else if(4 === 5)
          y += 10;
      `,
      errors: [{
        message: 'If Statement must have a block body'
      }]
    },
    {
      code: 
      `
        let y = 0;
        if(1 !== 2) {
          const x = 10;
        }
        else if(4 === 5) {
          y += 10;
        }
        else 
          y += 1000;
      `,
      errors: [{
        message: 'If Statement must have a block body'
      }]
    }
  ]
})
