var http = require('http'),
    io = require('socket.io');

//Create HTTP Server
var server = http.createServer(function(req, res){
    res.writeHead({"Content-Type": "text/html"});
    res.end("HTML5 WebSocket Demo");
});
server.listen(8000);

// Wrap HTTP server by socket.io
var socket = io.listen(server);
socket.on("connection", function(client) {
    console.log("connected");

    client.on("message", function(data){
        client.send("Hello " + data);
    });

    client.on("disconnect", function(){
        console.log("disconnected");
    });
});
