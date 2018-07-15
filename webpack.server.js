const path = require('path');

module.exports  = {

    //building bundle for node JS rather than for browser
    target: 'node',
    entry: './src/index.js',
    output: {
        filename:'bundle.js',
        path:path.resolve(__dirname, 'build')
    },

    module :{
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }

};