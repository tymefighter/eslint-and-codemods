
'use strict';

const CAMEL_CASE_REGEX = /^[a-z][a-zA-Z]*$/
const isCamelCase = value => CAMEL_CASE_REGEX.test(value);

module.exports = {
  meta: {
    docs: {
      description: 'Only allow camel case variables inside function scope',
      category: 'Sample',
      recommended: false,
    },
    fixable: null,
    schema: null
  },

  create: context => ({
    ':matches(FunctionDeclaration VariableDeclarator, ArrowFunctionExpression VariableDeclarator)': node => {
      const variableName = node.id.name;
      if(!isCamelCase(variableName)) {
        context.report({
          node,
          message: `Variable name ${variableName} is not in camel case`
        })
      }
    },
  })
}
