var app = require('./config/server');

var homeRoute = require('./app/routes/home')(app);
var pageNotFoundRoute = require('./app/routes/pageNotFound')(app);

//Start server
app.listen(3000, function() {
    console.log("OK");
})