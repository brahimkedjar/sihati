const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "css-loader",
    },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },

    ],
  },
  entry: {
    main: './app/javascript/packs/index.js',

  },

};
