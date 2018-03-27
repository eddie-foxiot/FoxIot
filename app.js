var express = require("express");
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require("assert");
var mongoose = require('mongoose');
var app = express();
var ttn = require("ttn");

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

//setting ttn

//configurando ejs 
app.set("view engine", "ejs");

//chamando a página inicial de login/singup
app.get("/", function (req, res) {
    res.render("login");
});

app.get("/singup", function(req,res){
    res.render("singup");
});
//chamando a página princial
app.get("/home", function(req,res){
    res.render("home");
});

//chamando a data_reading
app.get("/data", function(req,res){
    res.render("data_reading");
});

//pagina de configuação do perfil do usário
app.get("/setings", function(req,res){
    res.render("setings");
});

//pagina de erro
app.get("/error", function(req,res){
    res.render("error");
});

//configurando para sair na porta 3000 (digite no console localhost:3000);
var server = app.listen(3000, function () {
    console.log(new Date().toISOString() + ": server started on port 3000");
});
