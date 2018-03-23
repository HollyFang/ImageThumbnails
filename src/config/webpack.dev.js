const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  //devtool: 'source-map',
  entry: {
    home: `${__dirname}/../views/index.jsx`
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/../../dist/js`,
    publicPath: './js/'
  },
  module: {
    rules: [{
      test: /\.(jsx|js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["react", ["env", {
            "targets": {
              "browsers": ["last 4 versions", "safari >= 7"],
              "uglify": true
            }
          }]]
        }
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!postcss-loader'
      })
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      use: [{ //加载url-loader 同时安装 file-loader;
          loader: 'url-loader',
          options: {
            limit: 10000, //小于10000K的图片文件转base64到css里
            name: '../img/[name].[ext]'
          }
        }, { //压缩图片(另一个压缩图片：image-webpack-loader);
          loader: 'img-loader?minimize&optimizationLevel=5&progressive=true'
        },

      ]
    }]
  },
  plugins: [
    /*new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => {
        return module.resource && /node_modules/.test(module.resource)
      }
    }),*/
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      title: 'FE test Project',
      filename: '../../dist/index.html',
      template: `${__dirname}/../views/index.html`
    }),
    new ExtractTextPlugin("../css/styles.css"),
    //new BundleAnalyzerPlugin()
  ]
}