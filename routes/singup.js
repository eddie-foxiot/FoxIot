var express = require('express');
var router = express.Router();

//chamando a página inicial de login/singup
router.get("/singup", function(req,res){
    res.render("singup");
});

module.exports = router;