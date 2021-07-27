const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/main.ts',
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader' },
        { test: /\.vue$/, use: 'vue-loader' },
        { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
      ]
    },
    devtool: "source-map",
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new VueLoaderPlugin(),
    ]
  };