var express = require("express");
var router = express.Router();

var simuladorController = require("../controllers/simuladorController");

router.post("/registrar", function (req, res) {
    simuladorController.registrar(req, res);
})

router.get("/listar", function (req, res) {
    simuladorController.listar(req, res);
})

module.exports = router;