var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content - Type": "text/jtml"});
	response.write("<h1>Hello Word !</h1>");
	response.end();
});

//1-> Uma Forma de Subir o  Arquivo ao servidor
//server.listen(3000);
//localhost:3000

//2-> Outra Forma de Subir o  Arquivo ao servidor
server.listen(3000, function(){
	console.log("Servidor Hello World rodando!");
});