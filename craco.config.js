/* eslint-disable @typescript-eslint/no-var-requires */
const CracoAlias = require('craco-alias');

module.exports = {
    babel: {
        presets: ['@emotion/babel-preset-css-prop'],
        plugins: [
            '@emotion',
            ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
        ],
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
