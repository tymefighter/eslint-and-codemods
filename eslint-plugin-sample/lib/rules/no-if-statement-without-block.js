
'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'If statement must have a block statement',
      category: 'Sample',
      recommended: false,
    },
    fixable: null,
    schema: null
  },

  create: context => ({
    IfStatement: node => {
      const consequentNode = node.consequent;
      if(consequentNode.type !== 'IfStatement' && consequentNode.type !== 'BlockStatement') {
        context.report({
          node: consequentNode,
          message: 'If Statement must have a block body'
        })
      }

      const alternateNode = node.alternate;
      if(alternateNode && alternateNode.type !== 'IfStatement' && alternateNode.type !== 'BlockStatement') {
        context.report({
          node: alternateNode,
          message: 'If Statement must have a block body'
        })
      }
    }
  })
}
