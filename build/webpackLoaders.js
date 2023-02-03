module.exports = [
  {
    test: /\.js$/,
    use: ['babel-loader'],
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.vue(\?[^?]+)?$/,
    use: 'weex-loader',
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
          outputPath: 'assets',
          publicPath: './assets',
        },
      },
    ],
  },
  {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      appendTsSuffixTo: [/\.vue$/], //关键
    }
  }
]
