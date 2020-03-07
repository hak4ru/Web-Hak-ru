let field = document.getElementById("field");
let chat = document.getElementById("chat");

let ws = new WebSocket("ws://localhost:88/");

ws.onmessage = function(message){
    chat.value = message.data + "\n" + chat.value;
}

ws.onopen = function(){
    field.addEventListener(
        "keydown",
        function(event){
            if (event.which===13){
                ws.send(field.value);
                field.value = "";
            }
        }
    );
}