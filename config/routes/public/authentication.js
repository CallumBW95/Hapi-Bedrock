var path = require("path");
// console.log(path.resolve('config', 'authentication.js '));

const { admin } = require(path.resolve("config", "application.js"));

const privateRoute = path => `/${admin.url}${path && `/${path}`}`;
