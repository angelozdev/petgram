const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
   entry: './src/index.tsx',
   output: {
      filename: 'bundle.js',
      path: __dirname + '/dist',
      publicPath: '/'
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
   },
   devServer: {
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: [
                     '@babel/preset-typescript',
                     '@babel/preset-react',
                     '@babel/preset-env'
                  ]
               }
            }
         },
         {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './public/index.html',
         filename: 'index.html'
      }),
      new FaviconsWebpackPlugin('./public/icon.png'),
      new MiniCssExtractPlugin({
         filename: 'assets/[name].css'
      }),
      new WorkboxWebpackPlugin.GenerateSW({
         runtimeCaching: [
            {
               urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
               handler: 'CacheFirst',
               options: {
                  cacheName: 'images'
               }
            },
            {
               urlPattern: new RegExp('https://petgram-server-angelozam17.angelozam17.vercel.app/'),
               handler: 'NetworkFirst',
               options: {
                  cacheName: 'api'
               }
            }
         ]
      })
   ]
}