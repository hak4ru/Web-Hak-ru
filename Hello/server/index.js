let express = require("express");
let app = express();

app.get(
"/",
function(request, response){
    response.send("Hello, Node.js!!!");
}
);

app.listen(81);


//let cors = require("cors");
//app.use(cors());
app.get(
    "/page",
    function(request, response){
        let x = request.query.foo;
        response.send({ foo: x});
    }
    );
