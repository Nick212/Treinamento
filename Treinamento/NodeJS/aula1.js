var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content - Type": "text/jtml"});
	response.write("<h1>Hello Word !</h1>");
	response.end();
});


//server.listen(3000);
//localhost:3000

server.listen(3000, function(){
	console.log("Servidor Hello World rodando!");
});