var express = require('express');
var router = express.Router();

//chamando a página inicial de login/singup
router.get("/", function (req, res) {
    res.render("login");
});

module.exports = router;