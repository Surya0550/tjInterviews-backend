const express = require('express')
const userController = require("../controllers/userController")
const appConfig = require("../config/appConfig")

let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion;

    app.get('/', function (req, res) {
        res.send('Hello! This App is for TJ Group. Contact Administrator for more routes. Admin:Surya(9494391985)')
    })

    app.post(baseUrl + '/tjmail', userController.mailFunction);

    app.post(baseUrl + '/user/create', userController.createUser);

}// end setRouter function 

module.exports = {
    setRouter: setRouter
}