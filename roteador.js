/**
 * Arquivo de roteamento, aponta para o módulo correspondente em uma URL
 * @author Gustavo Neves Alves
 * @version 0.1
 */

/**
 * Método de roteamento, decide com base no caminho de pastas contidas na URL qual ação deve tomar
 * @param {String} nomePasta Caminho url.parse(request.url).pathname
 * @param {Array} manipuladores Lista de Manipuladores de Requisição
 */
var rota = function(nomePasta, manipuladores){
	console.log("A rota aponta para " + nomePasta);
	
	if(typeof manipuladores[nomePasta] === 'function'){
		manipuladores[nomePasta]();
	} else {
		console.log("Não existe manipulador para " + nomePasta);
	}
};

exports.rota = rota; 
