const webpack = require('webpack');
const path =require('path')
const config =  {
    entry: path.join(__dirname, "src/app.js"),
    stats: { module: false },
    resolve: { extensions: ['.js', '.ts', '.jsx', '.tsx', 'ts'] },
    output: {
        filename: "dist/dist.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader?silent=true'
            },
            {
                test: /\.(jsx?)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            },
            { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/[name]---[hash:base64:5].[ext]' },
            { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=assets/[name]---[hash:base64:5].[ext]' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=assets/[name]---[hash:base64:5].[ext]' },
        ]
    },
    plugins: [
    ]
};

module.exports = config;