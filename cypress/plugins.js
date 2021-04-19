const { startDevServer } = require('@cypress/webpack-dev-server')

/**
 * @type Cypress.PluginConfig
 */
module.exports = (on, config) => {
  on('dev-server:start', (options) => startDevServer({ 
      options, 
      webpackConfig: require("@vue/cli-service/webpack.config") 
    }))

  return config
}