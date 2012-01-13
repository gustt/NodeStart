/**
 * Servidor HTTP (WEB) 
 * @author Gustavo Neves Alves
 * @version 1.0
 */
var http = require("http");

http.createServer(function(request,response){
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.write("Hello Word");
	response.end();
}).listen(8000);
