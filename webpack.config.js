const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/script.js',
    output: {
        filename: 'assets/js/[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
                type: "asset/resource",
                generator:{
                    filename: 'assets/images/[name][ext]'
                }
            },
            { 
                test: /\.s[ac]ss$/i, 
                use:[ 
                    // Creates 'style' nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};