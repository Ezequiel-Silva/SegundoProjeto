const path = require('path');

module.exports = {
    entry: {
        home: './src/home.js',
        pedido: './src/pedido.js'
    },
    output: {
        filename: 'assets/js[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: "asset/resource",
                generator:{
                    filename: 'assets/images/[name][ext]'
                }
            },
            { test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
        ]
    }
};