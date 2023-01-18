const path = require('path');
const nodeExternals = require('webpack-node-externals');

const modfiyWebpackConfigForNytCmsInk = (config, options) => {
  const babelLoaderRule = config.module.rules.find((element) => element.loader === 'babel-loader');
  babelLoaderRule.exclude = undefined;
  babelLoaderRule.include = [
    path.resolve(__dirname, 'node_modules/@nyt-cms/ink'),
    path.resolve(__dirname, 'src'),
  ];

  if (options.type === 'server') {
    config.externals = [
      nodeExternals({
        modulesDir: options.modulesDir,
        allowlist: ['webpack/hot/poll?300', '@nyt-cms/ink'],
      }),
    ];
  }

  return config;
};
module.exports = {
  debug: false,
  modifyWebpackConfig: (config, options) => {
    config = modfiyWebpackConfigForNytCmsInk(config, options);
    return config;
  },
};
