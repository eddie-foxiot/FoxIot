var express = require('express');
var router = express.Router();

//chamando a página inicial de login/singup
router.get("/error", function (req, res) {
    res.render("error");
});

module.exports = router;