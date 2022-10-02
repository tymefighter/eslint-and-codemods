
'use strict';

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/no-prop-forwarding');

const ruleTester = new RuleTester({ 
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: { ecmaVersion: 6, sourceType: 'module', ecmaFeatures: { jsx: true } } 
});

ruleTester.run('no-if-statement-without-block', rule, {
  valid: [
    {
      code:
      `
        const App = () => (
          <Dashboard details={details} info={info} extras={extras} />
        )
      `
    }
  ],

  invalid: [
    {
      code:
      `
        const App = (props) => {
          const dashboardProps = { ...props, a: 10, b: 20 };
          return <Dashboard {...dashboardProps} />;
        }
      `,
      errors: [{
        message: 'No prop forwarding'
      }]
    }
  ]
})
