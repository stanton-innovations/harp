const path = require('path');
const webpack = require('webpack');
const angularCliConfig = require('./angular');
const getAppFromConfig = require('@angular/cli/utilities/app-utils').getAppFromConfig;
const WebpackTestConfig = require('@angular/cli/models/webpack-test-config').WebpackTestConfig;
const AngularCompilerPlugin = require('@ngtools/webpack/src/angular_compiler_plugin').AngularCompilerPlugin;

const appConfig = getAppFromConfig();
const testConfig = Object.assign({
  environment: 'dev',
  codeCoverage: false,
  sourcemaps: false,
  progress: true,
  preserveSymlinks: false,
});

const webpackConfig = new WebpackTestConfig(testConfig, appConfig).buildConfig();

webpackConfig.module.rules.forEach(rule => {
  if (rule.loader === '@ngtools/webpack') {
    delete rule.loader;
    rule.loaders = [
      {
        loader: 'ts-loader',
        options: {
          configFileName: path.resolve(appConfig.root, appConfig.testTsconfig),
          silent: true
        }
      }, 'angular2-template-loader'
    ]
  }
});
webpackConfig.plugins = webpackConfig.plugins.filter(plugin => !(plugin instanceof AngularCompilerPlugin));
webpackConfig.plugins.unshift(
  new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)/, path.resolve(__dirname, './src'))
);

// Delete global styles entry, we don't want to load them.
delete webpackConfig.entry.styles;
webpackConfig.devtool = false;
module.exports = webpackConfig;
