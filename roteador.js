/**
 * Arquivo de roteamento, aponta para o módulo correspondente em uma URL
 * @author Gustavo Neves Alves
 * @version 0.1
 */

/**
 * Método de roteamento, decide com base no caminho de pastas contidas na URL qual ação deve tomar
 * @param {String} nomePasta Caminho url.parse(request.url).pathname
 * @param {Array} manipuladores Lista de Manipuladores de Requisição
 * @param {Object} response Objeto HTTP Response
 * @param {String} request Objeto HTTP Request 
 */
var rota = function(nomePasta, manipuladores, response, request){
	console.log("A rota aponta para " + nomePasta);
	
	if(typeof manipuladores[nomePasta] === 'function'){
		console.log("Requisição de ação '" + nomePasta + "' foi invocada")
		return manipuladores[nomePasta](response, request);
	} else {
		console.log("Manipulador '" + nomePasta +"' não foi definido.");
		
		response.writeHead(404, {"Content-Type" : "text/html",
								 "chartset":"utf-8"});
								 
		response.write("P&aacute;gina n&atilde;o encontrada");
		response.end();
	}
};

exports.rota = rota; 
