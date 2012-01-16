/**
 * Arquivo principal
 * @author Gustavo Neves Alves
 * @version 0.1
 */

var servidor = require("./servidor");
var roteador = require("./roteador");
var manipuladorRequisicoes = require("./manipuladorRequisicoes");

var manipuladores = [];
manipuladores["/"] = manipuladorRequisicoes.iniciar;
manipuladores["/iniciar"] = manipuladorRequisicoes.iniciar;
manipuladores["/atualizar"] = manipuladorRequisicoes.atualizar;

servidor.iniciar(roteador.rota, manipuladores);
