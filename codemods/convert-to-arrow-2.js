function transformer(file, api) {
  const j = api.jscodeshift;
  const { visit } = j.types

  const doesNodeNotUseThisExpression = node => {
    let usesThisExpression = false;
    
    visit(node, {
      visitThisExpression() {
        usesThisExpression = true;
        this.abort();
      }
    })

    return !usesThisExpression;
  }

  const root = j(file.source);

  // Convert Function Declarations
  root
    .find(j.FunctionDeclaration)
    .filter(doesNodeNotUseThisExpression)
    .replaceWith(functionDeclarationNode => {
      const functionName = functionDeclarationNode.value.id.name;
      const functionParamsNodes = functionDeclarationNode.value.params;
      const functionBodyNode = functionDeclarationNode.value.body;

      return j.variableDeclaration(
        'const',
        [
          j.variableDeclarator(
            j.identifier(functionName),
            j.arrowFunctionExpression(functionParamsNodes, functionBodyNode)
          )
        ]
      );
    });

  // Convert Function Expressions
  root
    .find(j.FunctionExpression)
    .filter(doesNodeNotUseThisExpression)
    .replaceWith(functionExpressionNode => {
      const functionParamsNodes = functionExpressionNode.value.params;
      const functionBodyNode = functionExpressionNode.value.body;

      return j.arrowFunctionExpression(functionParamsNodes, functionBodyNode);
    });

  return root.toSource();
}

module.exports = transformer;
