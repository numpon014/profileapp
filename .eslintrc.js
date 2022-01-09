module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        'airbnb',
        'prettier'
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        'prettier',
        'react',
        'react-hooks'
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": "off",
        'react/forbid-prop-types': "off",
        'react/require-default-props': "off",
        "no-console": "error",
        'import/prefer-default-export': "off",
        'default-param-last': "off",
        'no-use-before-define': "off",
        'no-promise-executor-return': "off",
    }
};
