var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function registrar(preco, couro, tamanho, hardware, valorfinal, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", preco, couro, tamanho, hardware, valorfinal, fkUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO bolsa (preco, couro, tamanho, hardware, valorfinal, fkUsuario) VALUES ('${preco}', '${couro}', '${tamanho}', '${hardware}', ${valorfinal}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listar(preco, couro, tamanho, hardware, valorfinal, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", preco, couro, tamanho, hardware, valorfinal, fkUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    SELECT
    b.idBolsa,
    b.couro,
    b.tamanho,
    b.hardware,
    b.preco,
    b.valorFinal,
    u.ldUsuario,
    u.nome AS nome_usuario,
    u.email AS email_usuario,
    agg_user.ticket_medio,
    
    (
        SELECT AVG(CAST(b_global.valorfinal AS DECIMAL(10,2)) - CAST(b_global.preco AS DECIMAL(10,2)))
        FROM bolsa b_global
    ) AS valorizacao_media,
    (
        SELECT MAX(CAST(b_global.valorfinal AS DECIMAL(10,2)) - CAST(b_global.preco AS DECIMAL(10,2)))
        FROM bolsa b_global
    ) AS maior_valorizacao,
    (
        SELECT COUNT(*)
        FROM bolsa b_global
    ) AS total_bolsas_registradas

FROM 
    bolsa b
JOIN 
    usuario u ON b.fkUsuario = u.ldUsuario
JOIN 
    (
        SELECT 
            u_agg.ldUsuario, 
            AVG(CAST(u_agg.tktmedio AS DECIMAL(10,2))) AS ticket_medio
        FROM usuario u_agg
        GROUP BY u_agg.ldUsuario
    ) AS agg_user ON u.ldUsuario = agg_user.ldUsuario
    ORDER BY
    b.idBolsa
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    listar
};

