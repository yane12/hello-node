var http = require('http');
var port = 8080;

var requestHandler = function(request, response) {
    console.log("New Request to: " + request.url);
    response.end("Hello, node");
}

var server = http.createServer(requestHandler);

server.listen(port, function(){
    console.log("Listening on port " + port);
});