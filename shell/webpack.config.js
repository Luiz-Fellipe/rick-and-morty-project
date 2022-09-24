const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const deps = require('./package.json').dependencies;

module.exports = {
  output: {
    publicPath: 'http://localhost:3000/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
        extensions: ['.tsx', '.ts'],
      }),
    ],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        character_details:
          'character_details@http://localhost:3002/remoteEntry.js ',
        characters_list:
          'characters_list@http://localhost:3001/remoteEntry.js '
      },
      exposes: {
        './styles': './src/styles/index.ts',
        './components/button': './src/components/global/button/index.tsx',
        './components/input': './src/components/global/input/index.tsx',
        './App': './src/App',
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
          '@fortawesome/free-solid-svg-icons': {
            singleton: true,
          }
        },
      ],
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
