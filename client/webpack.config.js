const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: {
        bundle: path.resolve(__dirname, './index.jsx'),
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
        
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    devtool: 'source-map',
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:  {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            { 
                test: /\.css$/, 
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(scss)$/,
                use: [
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader'
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      postcssOptions: {
                        plugins: () => [
                          require('autoprefixer')
                        ]
                      }
                    }
                  },
                  {
                    loader: 'sass-loader'
                  }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 5000,
    },
    plugins: [
        new HTMLWebpackPlugin({
          title: 'Moon`s Twitter Clone',
          filename: 'index.html',
          template: './template.html',
        }),
    ]
}