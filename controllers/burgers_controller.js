var express = require("express");
let orm = require("../config/orm.js");
var path = require("path")

module.exports = function (app) {

    app.get("/", function(req, res){
        res.render("index")
    });

}