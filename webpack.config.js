const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
  context: __dirname,
  devServer: {
    openPage: 'index.html'
  },
  entry: './src/index.js',
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebPackPlugin()
  ]
};
