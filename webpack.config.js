const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.tsx',
   output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
   },
   module: {
      rules: [
         {
            test: /\.tsx$/,
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
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './public/index.html',
         filename: 'index.html'
      })
   ]
}