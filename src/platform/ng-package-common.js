module.exports = {
  $schema: '../../node_modules/ng-packagr/ng-package.schema.json',
  lib: {
    entryFile: 'index.ts',
    umdModuleIds: {
      '@dgx/core/common': 'dgx.core.common',
    },
  },
  whitelistedNonPeerDependencies: ['.'],
};
