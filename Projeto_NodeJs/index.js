var express = require('express');
var app = express();

app.get("/", function(request, response) {
    response.send("<html><body>Server is Running</body><html>");
})

app.listen(3000, function() {
    console.log("Ok");
})