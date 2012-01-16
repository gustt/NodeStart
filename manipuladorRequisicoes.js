/**
 * Módulo manipulador de requisições
 * @author Gustavo Neves Alves
 * @version 0.1
 */

var exec = require("child_process").exec;
var querystring = require("querystring");

/**
 * 
 */
var iniciar = function(response){
	console.log("Requisição de ação 'iniciar' foi invocada!");
	
	response.writeHead(200, {"Content-Type" : "text/html",
								"chartset":"UTF-8"});
	var body = "<html>" +
					"<head>" +
						"<meta http-equiv='Content-Type' content='text/html' charset='UTF-8' />" +
					"</head>" +
					"<body>" +
						"<form action='/atualizar' method='post'>" +
							"<textarea name='text' rows='20' cols='60' ></textarea>" +
							"<input type='submit' value='Enviar' />" +
						"</form>" + 
					"</body>" + 
				"</html>";
								
	response.write(body);
	response.end();
};

/**
 * 
 */
var atualizar = function(response, dadosPostados){
	console.log("Requisição de ação 'atualizar' foi invocada!");
	response.writeHead(200, {"Content-Type" : "text/html" });
	response.write("Dados recebidos: " + querystring.parse(dadosPostados).text);
	response.end();
};

exports.iniciar = iniciar;
exports.atualizar = atualizar;