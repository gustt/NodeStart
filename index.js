/**
 * Arquivo principal
 * @author Gustavo Neves Alves
 * @version 0.1
 */

var servidor = require("./servidor");
var roteador = require("./roteador");

servidor.iniciar(roteador.rota);
