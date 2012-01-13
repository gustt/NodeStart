/**
 * Servidor HTTP (WEB) 
 * @author Gustavo Neves Alves
 * @version 0.1
 */

var http = require("http");
var url = require("url");

function iniciar(rota){
	/**
	 * Método de requisição
	 * @param {Object} request Objeto callback da requisição
	 * @param {Object} response Objeto de resposta
	 */
	var aoRequerer =  function (request, response){
		var nomePasta = url.parse(request.url).pathname;
		console.log("Requisição recebida...");
		
		rota(nomePasta);
		
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write("Hello Word");
		response.end();
	};
	
	/**
	 * Executa servidor HTTP
	 */
	http.createServer(aoRequerer).listen(666);
	console.log("Servidor iniciado...");
}

exports.iniciar = iniciar;