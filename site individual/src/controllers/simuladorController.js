var simuladorModel = require("../models/simuladorModel");

function registrar(req, res){
var preco = req.body.precoServer;
    var couro = req.body.couroServer;
    var tamanho = req.body.tamanhoServer;
    var hardware = req.body.hardwareServer;
    var valorfinal = req.body.valorFinalServer;
    var idUsuario = req.body.idUsuarioServer;

    // Faça as validações dos valores
        if (preco == undefined) {
            res.status(400).send("Seu nome está undefined!");
        } else if (couro == undefined) {
            res.status(400).send("Seu email está undefined!");
        } else if (tamanho == undefined) {
            res.status(400).send("Sua senha está undefined!");
        } else if (hardware == undefined) {
            res.status(400).send("Sua empresa a vincular está undefined!");
        } else if (valorfinal == undefined) {
            res.status(400).send("Sua senha está undefined!");
        }else if(idUsuario == undefined){
            res.status(400).send("Seu usuario está undefined")
        }else {
    
            // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            simuladorModel.registrar(preco, couro, tamanho, hardware, valorfinal, idUsuario)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
                
        }
}
module.exports = {
  registrar
}