/**
 * Servidor HTTP (WEB) 
 * @author Gustavo Neves Alves
 * @version 0.1
 */

var http = require("http");
var url = require("url");

/**
 * Método principal, iniciar o servidor
 * @param {Function} rota Função de roteamento
 * @param {Array} manipuladores Lista Array de Manipuladores de Requisição 
 */
function iniciar(rota, manipuladores){
	/**
	 * Método de requisição
	 * @param {Object} request Objeto callback da requisição
	 * @param {Object} response Objeto de resposta
	 */
	var aoRequerer =  function (request, response){
		var nomePasta = url.parse(request.url).pathname;
		console.log("Requisição recebida...");
		
		var resposta = 	rota(nomePasta, manipuladores, response);
		
		console.log("\n\n");
	};
	
	/**
	 * Executa servidor HTTP
	 */
	http.createServer(aoRequerer).listen(666);
	console.log("Servidor iniciado...");
}

exports.iniciar = iniciar;