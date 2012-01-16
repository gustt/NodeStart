/**
 * Módulo manipulador de requisições
 * @author Gustavo Neves Alves
 * @version 0.1
 */

var exec = require("child_process").exec;
/**
 * 
 */
var iniciar = function(response){
	console.log("Requisição de ação 'iniciar' foi invocada!");
	
	exec("find /", { timeout: 10000, maxBuffer: 20000*1024 },
		function(error, stdout, stderr){
		response.writeHead(200, {"Content-Type" : "text/html",
									"chartset":"utf-8"});
		response.write(stdout);
		response.end();
	});
};

/**
 * 
 */
var atualizar = function(){
	console.log("Requisição de ação 'atualizar' foi invocada!");
	response.writeHead(200, {"Content-Type" : "text/html",
									"chartset":"utf-8"});
	response.write("atualizar");
	response.end();
};

exports.iniciar = iniciar;
exports.atualizar = atualizar;