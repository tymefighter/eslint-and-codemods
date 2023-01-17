function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // Convert Function Declarations
  root
    .find(j.FunctionDeclaration)
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
    .replaceWith(functionExpressionNode => {
      const functionParamsNodes = functionExpressionNode.value.params;
      const functionBodyNode = functionExpressionNode.value.body;

      return j.arrowFunctionExpression(functionParamsNodes, functionBodyNode);
    });

  return root.toSource();
}

module.exports = transformer;
