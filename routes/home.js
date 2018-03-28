var express = require('express');
var router = express.Router();

//chamando a página inicial de login/singup
router.get("/home", function (req, res) {
    res.render("home");
});

module.exports = router;