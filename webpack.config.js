/*
 * Created by rama41222 on 12/14/17 10:40 AM
 * Copyright(c) 2017. All rights reserved
 *
 * Last Modified: 12/14/17 10:40 AM by Rama41222
 */

const path = require('path')
const exludedModules = require('webpack-node-externals')
const env = process.env.NODE_ENV

module.exports = {
    target:'node',
    externals: [exludedModules()],
    entry: ['babel-polyfill','./index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename:'index.bundle.js'
    },
    module: {
        loaders: [
            {test: /.js$/, loader: 'babel-loader',  exclude: /node_modules/, query: { presets:  ['env','stage-2'] }},
        ]
    }

}