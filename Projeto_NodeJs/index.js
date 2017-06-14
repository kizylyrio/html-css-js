var express = require('express');
var app = express();

//View
app.set('view engine', 'ejs');

//Requests
app.get("/", function(request, response) {
    response.render("status/ok.ejs");
})

app.listen(3000, function() {
    console.log("Ok");
})