const MongoClient = require('mongodb').MongoClient;
let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb+srv://tjAdmin:xubyMYiWsNRHMKl4@tjinterviews.1pxqx.mongodb.net/users?retryWrites=true&w=majority',
}
appConfig.apiVersion = '/api/v1';

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion
}