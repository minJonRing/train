const path = require("path");
const paths = require("react-scripts/config/paths");
paths.appBuild = path.join(path.dirname(paths.appBuild), "dist");

function override(config, env) {
  config.output.path = path.join(path.dirname(config.output.path), "dist");
  return config;
}

module.exports = override;
