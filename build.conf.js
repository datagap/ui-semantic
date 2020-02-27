'use strict';

module.exports = {
  deployed: 'deploy/platform/',
  angularVersion: '^8.0.0 || ^9.0.0 || ^10.0.0-0',
  materialVersion: '^8.0.0 || ^9.0.0 || ^10.0.0-0',
  paths: {
    PostNgPackngrBuildRequiredFiles: [
      '!src/platform/core/**/*.component.scss',
      'src/platform/core/**/*.scss',

      'src/platform/core/**/MaterialIcons-Regular-v48.woff2',
      'src/platform/core/**/*.md',
    ],
    PostNgPackngrCompileStyles: [
      'deploy/platform/core/**/material-icons.scss',
      'deploy/platform/core/**/platform.scss',
      'deploy/platform/core/**/theming/prebuilt/**/*.scss',
    ],
    PostNgPackngrBuildRequiredAssetsFiles: ['src/platform/assets/**/*.scss'],
    PostNgPackngrAdditionalFiles: [
      '!src/platform/core/**/*.component.scss',
      '!src/platform/core/**/*.scss',
      '!src/platform/assets/**/*.scss',
      '!src/platform/**/*.component.scss',
      'src/platform/**/*.scss',
      '!src/platform/core/**/*.md',
      'src/platform/**/*.md',
    ],
    PostNgPackagerCodingStandardsPackage: ['src/platform/coding-standards/**/*.{js,json}'],
    PostNgPackagerAssetsPackage: ['src/platform/assets/**/*.{scss,json}'],
  },
};
