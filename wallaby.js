var babel = require('babel');

module.exports = function (wallaby) {
  return {
    files: [
      'src/*.js'
    ],

    tests: [
      'test/*.js'
    ],
    env: {
      type: 'node'
    },
    testFramework: 'mocha',
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: babel,
        // https://babeljs.io/docs/usage/experimental/
        stage: 0
      })
    }
  };
};
