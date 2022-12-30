const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PATH = {
    dist: path.resolve(__dirname, "./dist")
};

module.exports = {
    devtool: 'source-map',
    mode: 'production',
    // mode: 'development',
    entry: './src/script.js',
    output: {
        filename: './[name].bundle.js',
        path: PATH.dist
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
                type: "asset/resource",
                generator:{
                    filename: 'image/[name][ext]',
                }
            },
            { 
                exclude: /node_modules/,
                test: /\.js$/, 
                enforce: 'pre', 
                use: [ 'source-map-loader' ]
            },
            { 
                exclude: /node_modules/,
                test: /\.css$/i, use: ['style-loader', 'css-loader'] 
            },
            {
                exclude: /node_modules/,
                test: /\.json$/i,
                type: "asset/resource",
                generator: {
                    filename: './[name].bundle.json',
                }
            },
            { 
                exclude: /node_modules/,
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
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ],
};
//npm run build