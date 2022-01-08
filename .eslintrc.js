module.exports = {
    "env": {
        "browser": true,
        "es2021": true
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
        "no-console": "error"
    }
};
