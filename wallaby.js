process.env.BABEL_ENV = 'test';

const { version: softwareVersion } = require('./package.json');

module.exports = wallaby => ({
  files: [
    'package.json',
    'scripts/utils/setup-jest.js',
    'src/**/*.js',
    'src/**/*.css',
    'src/**/*.json',
    '!src/**/*.test.js',
    '!src/**/*.testx.js'
  ],

  tests: ['src/**/*.test.js', '!node_modules/**'],

  env: {
    type: 'node',
    runner: 'node',
    params: {
      // this allows us to use absolute paths in import statements instead of ../../../../../bla.js
      env: `NODE_PATH=${wallaby.projectCacheDir};NODE_ENV=test;npm_package_version=${softwareVersion}`
    }
  },

  testFramework: 'jest',

  compilers: {
    '**/*.js': wallaby.compilers.babel()
  },

  reportUnhandledPromises: false
});