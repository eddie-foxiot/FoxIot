/** variaveis */
var express = require("express");
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require("assert");
var mongoose = require('mongoose');
var ttn = require("ttn");

/** rotas */
var routes = require('./routes/login');
var routes = require('./routes/singup');
var routes = require('./routes/home');
var routes = require('./routes/settings');
var routes = require('./routes/data_reading');
var routes = require('./routes/error');

var app = express();

//configurando ejs 
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

//set ttn
var appID = "fox_lora_meter";
var accessKey = "ttn-account-v2.RDViDzHErZlfgWGDdMNdNNme2WBVc7BPoxUXHdAr06I";

//use app.use to static folders always be used
app.use("/img",express.static(__dirname + "/public/images"));
app.use("/css", express.static(__dirname + "/assets/css"));
app.use("/lib", express.static(__dirname + "/assets/js/lib"));
app.use("/js", express.static(__dirname + "/assets/js"));
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));
//teste do caminho do diretorio
console.log(__dirname);

//concetando o mongodb com o mongosse
MongoClient.connect(null, function(err, db){
    console.log("test the function");
});

//setting app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//configurando para sair na porta 3000 (digite no console localhost:3000);
var server = app.listen(3000, function () {
    console.log(new Date().toISOString() + ": server started on port 3000");
});
