const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PATH = {
    dist: path.resolve(__dirname, "./dist")
};

module.exports = {
    mode: 'production',
    // mode: 'development',
    entry: './src/script.js',
    output: {
        filename: 'assets/js/[name].bundle.js',
        path: PATH.dist
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
                type: "asset/resource",
                generator:{
                    filename: 'image/[name][ext]'
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
            template: 'src/index.html'
        })
    ]
};