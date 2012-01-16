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
		var dadosPostados = "";
		console.log("\n\n\n╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦╩╬╦")
		console.log("Requisição recebida...");
		
		request.setEncoding("utf8");
		request.addListener("data", function(parteDadosPostados){
			dadosPostados += parteDadosPostados;
			console.log("» » Dados foram recebidos: \n '" + parteDadosPostados + "'");
		})
		
		request.addListener("end", function(){
			rota(nomePasta, manipuladores, response, dadosPostados);		
		})
	};
	
	/**
	 * Executa servidor HTTP
	 */
	http.createServer(aoRequerer).listen(666);
	console.log("Servidor iniciado...\n\n");
}

exports.iniciar = iniciar;