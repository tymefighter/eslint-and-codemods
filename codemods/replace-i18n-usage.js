function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  // Step 1: Update import
  const legacyI18nImportNodes = root
    .find(j.VariableDeclarator)
    .filter(
      variableDeclaratorNode => 
        variableDeclaratorNode
        .value
        .init
        ?.callee
        ?.name === 'require' &&
        variableDeclaratorNode
        .value
        .id
        ?.properties
        ?.find?.(
          property => property.key?.name === '__'
        )
    )

  legacyI18nImportNodes
    .forEach(legacyI18nImportNode => {
      const legacyI18nImportNodeProperty = 
        legacyI18nImportNode
        .value
        .id
        ?.properties
        ?.find?.(
          property => property.key?.name === '__'
        );

      if(legacyI18nImportNodeProperty) {
        legacyI18nImportNodeProperty.key.name = '__unknownT'
      }
    })

  // Step 2: Update all usages
  const legacyI18nNodes = root
    .find(j.CallExpression)
    .filter(
      callExpressionNode => 
        callExpressionNode
        .value
        .callee
        .name === '__'
    )

  legacyI18nNodes
    .forEach(legacyI18nNode => {
      legacyI18nNode.value.callee.name = '__unknownT';
    });

  return root.toSource();
}

module.exports = transformer
