const path = require('path');

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

const env = process.env.NODE_ENV;


const config = {
    mode: env || 'development',
    target: 'node',
    entry: {
        client: [src + '/client.js'],
        server: [src + '/server.js'],
    },
    output: {
        path: path.resolve(__dirname, './public/'),
        publicPath: './public/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};

module.exports = config;