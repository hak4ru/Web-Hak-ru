let wss = require( "ws" ).Server;
let server = new wss( {port:88} );
let client = new Set();

server.on(
    "connection",
    function(socket){
        client.add(socket);
        socket.on(
            "message",
            function(message){
                for (let interlocutor of client){
                    interlocutor.send(message);
                }
            });
        socket.on(
            "close",
            function(){
                client.delete(socket);
            });
    });

    
let express = require("express");
let app = express();
    
app.use(express.static("../client"));
    
app.listen(80);