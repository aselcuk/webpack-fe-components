module.exports = {
  entry: './lib/index.ts',
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.s?css$/i,
        use: [
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  }
}