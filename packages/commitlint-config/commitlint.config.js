  module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'body-leading-blank': [2, 'always'],
      'type-enum': [
        2,
        'always',
        [
          'build',
          'chore',
          'ci',
          'docs',
          'feat',
          'fix',
          'perf',
          'refactor',
          'style',
          'test',
          'hotfix',
          'assets',
        ],
      ],
    }
  }