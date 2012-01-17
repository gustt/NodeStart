/**
 * Módulo manipulador de requisições
 * @author Gustavo Neves Alves
 * @version 0.1
 */

var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

/**
 * Inicia formulário
 * @param {Object} response Objeto HTTP Response
 * @param {Object} request Objeto HTTP Request
 */
var iniciar = function(response, request){
	response.writeHead(200, {"Content-Type" : "text/html",
								"chartset":"UTF-8"});
	var body = "<html>" +
					"<head>" +
						"<meta http-equiv='Content-Type' content='text/html' charset='UTF-8' />" +
					"</head>" +
					"<body>" +
						"<form action='/postagem' method='post' enctype='multipart/form-data'>" +
							"<input type='file' name='postagem' />"+
							"<input type='submit' value='Enviar Arquivo' />" +
						"</form>" + 
					"</body>" + 
				"</html>";
								
	response.write(body);
	response.end();	
};

/**
 * Método para postagem de arquivos
 * @param {Object} response Objeto HTTP Response
 * @param {Object} request Objeto HTTP Request
 */
var postagem = function(response, request){
	console.log("Iniciando a manipulação do fomulário.");
	
	var form = new formidable.IncomingForm();
	form.parse(request, function(error, fields, files){
		console.log("Manipulação concluída");
		
		var caminhoFinal = "tmp/" + files.postagem.name;
		fs.renameSync(files.postagem.path, caminhoFinal);
		
		response.writeHead(200, {"Content-Type" : "text/html" });
		response.write("Imagem recebida:<br />");
		response.write("<img src='/visualizar?src=" + caminhoFinal +
							"&type=" + files.postagem.type + "' alt='Imagem enviada pelo formul&aacute;rio' />");
		response.end();		
	});
};

/**
 * Recebe o post
 * @param {Object} response Objeto HTTP Response
 * @param {Object} request Objeto HTTP Request
 */
var atualizar = function(response, request){
	response.writeHead(200, {"Content-Type" : "text/plain" });
	response.write("Dados recebidos: " + querystring.parse(request.url).text);
	response.end();
};

/**
 * Manipulador para vizualiar arquivos postados
 * @param {Object} response Objeto HTTP Response
 * @param {Object} request Objeto HTTP Request
 */
var visualizar = function(response, request){
	var params = querystring.parse(request.url.replace("/visualizar?",""));
	fs.readFile(params.src, "binary", function(error, file){
		try{
			console.log(params);
			if(error){
				response.writeHead(501, {"Content-type": "text/plain"});
				response.write(error + "\n");
			}else{
				response.writeHead(200, {"Content-type": params.type});
				response.write(file, "binary");
			}
		}catch(e){
			console.log(e);
		}
		response.end();
	});
};

exports.iniciar = iniciar;
exports.atualizar = atualizar;
exports.visualizar = visualizar;
exports.postagem = postagem;