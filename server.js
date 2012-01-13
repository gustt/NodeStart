/**
 * Servidor HTTP (WEB) 
 * @author Gustavo Neves Alves
 * @version 1.0
 */

/**
 * Método de requisição
 * @param {Object} request Objeto callback da requisição
 * @param {Object} response Objeto de resposta
 */
var onRequest = function(request, response){
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.write("Hello Word");
	response.end();
};

/**
 * Executa servidor HTTP
 */
var http = require("http");
http.createServer(onRequest).listen(666);
