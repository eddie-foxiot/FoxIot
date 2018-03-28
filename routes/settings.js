var express = require('express');
var router = express.Router();

//chamando a página inicial de login/singup
router.get("/settings", function (req, res) {
    res.render("settings");
});

module.exports = router;