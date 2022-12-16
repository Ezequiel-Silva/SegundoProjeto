const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const PATH = {
    dist: path.resolve(__dirname, "./dist")
};

module.exports = {
    mode: 'production',
    // mode: 'development',
    entry: './src/script.js',
    devtool: 'source-map',
    output: {
        filename: './[name].bundle.js',
        path: PATH.dist
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
                type: "asset/resource",
                generator:{
                    filename: 'image/[name][ext]',
                }
            },
            { 
                test: /\.js$/, 
                enforce: 'pre', 
                use: [ 'source-map-loader' ]
            },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
            {
                test: /\.json$/i,
                type: "asset/resource",
                generator: {
                    filename: './[name].bundle.json',
                }
            },
            { 
                test: /\.s[ac]ss$/i, 
                use:[ 
                    // Cria nós de estilo a partir de strings JS
                    "style-loader",
                    // Traduz CSS para CommonJS
                    "css-loader",
                    // Compila Sass para CSS
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
};
//npm run build