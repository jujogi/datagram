module.exports = {
    parserOptions: {
        sourceType: 'module'
    },
    parser: 'babel-eslint',
    env: {
        node: true
    },
    plugins: ['prettier', 'jest'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          'singleQuote': false
        }
      ]
    }
  }
  