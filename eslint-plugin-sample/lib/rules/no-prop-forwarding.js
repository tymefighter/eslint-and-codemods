
'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'No prop forwarding',
      category: 'Sample',
      recommended: false,
    },
    fixable: null,
    schema: null
  },

  create: context => ({
    JSXSpreadAttribute: node => {
      context.report({
        node,
        message: 'No prop forwarding'
      })
    }
  })
}
