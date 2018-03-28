var express = require('express');
var router = express.Router();

//chamando a página inicial de login/singup
router.get("/data_reading", function (req, res) {
    res.render("data_reading");
});

module.exports = router;