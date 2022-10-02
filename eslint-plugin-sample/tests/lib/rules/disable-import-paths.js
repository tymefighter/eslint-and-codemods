
'use strict';

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/disable-import-paths');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6, sourceType: 'module' } });

ruleTester.run('disable-import-paths', rule, {
  valid: [
    {
      options: [
        ['components/a/b']
      ],
      code:
      `
        import D from 'components/d';
      `
    }
  ],

  invalid: [
    {
      options: [
        [
          'sample/comp',
          'components/a/b/c',
          'utils/d/e'
        ]
      ],

      code:
      `
        import { C, X, Y } from 'components/a/b/c';
      `,

      errors: [
        {
          message: 'components/a/b/c import path not allowed'
        }
      ]
    },
    {
      options: [
        [
          'sample/comp',
          'components/a/b/c',
          'utils/d/e'
        ]
      ],

      code:
      `
        import e from 'utils/d/e';
        import { P } from 'p';
        import { SampleComponent } from 'sample/comp';
      `,

      errors: [
        {
          message: 'utils/d/e import path not allowed'
        },
        {
          message: 'sample/comp import path not allowed'
        }
      ]
    }
  ]
})