const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: { index: "/index.html" },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketingTeam: "marketing@http://localhost:8081/remoteEntry.js",
        authTeam: "auth@http://localhost:8082/remoteEntry.js",
        dashboardTeam: "dashboard@http://localhost:8083/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
