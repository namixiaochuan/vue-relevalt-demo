module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', 'prettier', '@vue/prettier'],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 2017
    },
    rules: {
        'prettier/prettier': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'no-console': 0,
        'no-tabs': 'off',
        'generator-star-spacing': 'off',
        'semi': ['error', 'never'],
        'indent': ['error', 4],
        'linebreak-style': [0, 'error', 'window'],
        'quotes': ['error', 'single'],
        'brace-style': ['error', '1tbs'],
        'no-new': ['off'],
        'camelcase': [
            'warn',
            {
                'properties': 'never'
            }
        ],
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'never'
            }
        ],
        'spaced-comment': [
            'warn',
            'always',
            {
                'line': {
                    'markers': ['/'],
                    'exceptions': ['-', '+']
                },
                'block': {
                    'markers': ['!', '*'],
                    'exceptions': ['*'],
                    'blanced': true
                }
            }
        ]
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                mocha: true
            }
        }
    ],
    globals: {
        defineProps: 'readonly'
    }
}
