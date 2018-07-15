const path = require('path');
const merge = require('webpack-merge');
const webpackExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base.js');


const config  = {

    //building bundle for node JS rather than for browser
    target: 'node',
    entry: './src/index.js',
    output: {
        filename:'bundle.js',
        path:path.resolve(__dirname, 'build')
    },
    externals: [webpackExternals()]
};

module.exports = merge(baseConfig, config);