/**
 * Módulo manipulador de requisições
 * @author Gustavo Neves Alves
 * @version 0.1
 */

var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");

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
						"<form action='/atualizar' method='post' enctype='multipart/form-data'>" +
							"<input type='file' name='postagem' />"+
							"<input type='submit' value='Enviar Arquivo' />" +
						"</form>" + 
					"</body>" + 
				"</html>";
								
	response.write(body);
	response.end();	
};

/**
 * Manipulador de atualização
 */
var atualizar = function(response, dadosPostados){
	console.log("Requisição de ação 'atualizar' foi invocada!");
	response.writeHead(200, {"Content-Type" : "text/html" });
	response.write("Dados recebidos: " + querystring.parse(dadosPostados).text);
	response.end();
};

/**
 * Manipulador para vizualiar arquivos postados
 */
var visualizar = function(response, dadosPostados){
	console.log("Requisição de ação 'visualizar' foi invocada")
	fs.readFile("\spok.jpg", "binary", function(error, file){
		if(error){
			response.writeHead(501, {"Content-type": "text/plain"});
			response.write(error + "\n");
			response.end();
		}else{
			response.writeHead(200, {"Content-type": "image/jpg"});
			response.write(file, "binary");
			response.end();
		}
	})
};

exports.iniciar = iniciar;
exports.atualizar = atualizar;
exports.visualizar = visualizar;