
'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'If statement must have a block statement',
      category: 'Sample',
      recommended: false
    },
    fixable: null,
    schema: [
      {
        type: 'array',
        items: { type: 'string' },
        minItems: 1,
      }
    ]
  },

  create: context => {
    const paths = context.options?.[0] ?? [];

    return {
      ImportDeclaration: node => {
        const importPath = node.source.value;
        if(paths.includes(importPath)) {
          context.report({
            node,
            message: `${importPath} import path not allowed`
          })
        }
      }
    }
  }
}
