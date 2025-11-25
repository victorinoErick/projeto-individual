var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.post("/registrar", function (req, res) {
    simuladorController.registrar(req, res);
})

module.exports = router;