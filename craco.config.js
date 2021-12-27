/* eslint-disable @typescript-eslint/no-var-requires */
const CracoAlias = require('craco-alias');

module.exports = {
    babel: {
        presets: ['@emotion/babel-preset-css-prop'],
        plugins: ['@emotion'],
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: '.',
                tsConfigPath: './tsconfig.extend.json',
            },
        },
    ],
};
