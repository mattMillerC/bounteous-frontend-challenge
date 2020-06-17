const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const fs = require("fs");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    https: true,
    host: '0.0.0.0',
    port: 443,
    public: 'ec2-3-128-50-114.us-east-2.compute.amazonaws.com',
    key: fs.readFileSync('/home/ubuntu/keys/https.key'),
    cert: fs.readFileSync('/home/ubuntu/keys/https.crt'),
  },
});