/**
 * Arquivo de roteamento, aponta para o módulo correspondente em uma URL
 * @author Gustavo Neves Alves
 * @version 0.1
 */

/**
 * Método de roteamento, decide com base no caminho de pastas contidas na URL qual ação deve tomar
 * @param {String} nomePasta Caminho url.parse(request.url).pathname
 * @param {Array} manipuladores Lista de Manipuladores de Requisição
 * @param {Object} response Objecto HTTP Response
 * @param {String} dadosPostados Dados recebidos pelo POST 
 */
var rota = function(nomePasta, manipuladores, response, dadosPostados){
	console.log("A rota aponta para " + nomePasta);
	
	if(typeof manipuladores[nomePasta] === 'function'){
		return manipuladores[nomePasta](response, dadosPostados);
	} else {
		response.writeHead(404, {"Content-Type" : "text/html",
								 "chartset":"utf-8"});
								 
		response.write("P&aacute;gina n&atilde;o encontrada");
		response.end();
	}
};

exports.rota = rota; 
