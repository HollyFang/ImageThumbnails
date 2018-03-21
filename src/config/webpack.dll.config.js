const webpack = require('webpack');
const path    = require('path');

const react = 

module.exports = {
    output: {
        path: path.join(__dirname, '../../dist/js'),//`{__dirname}../../dist/js`,
        filename: '[name].dll.js',
        library: '[name]',
    },
    entry: {
        "react": [
    'react',
    'react-dom',
    'react-redux',
    'redux'
],
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '../../dist/js','manifest.json'),
            name: '[name]',
        }),
    ],
};