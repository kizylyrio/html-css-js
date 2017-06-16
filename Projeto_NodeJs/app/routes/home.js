module.exports = function(app) {
    app.get("/", function(request, response) {

        // var options = {
        //     host: "172.16.28.18",
        //     port: 80,
        //     path: '/api/test/configurations',
        //     method: 'GET'
        // };

        // http.request(options, function(res) {
        //     console.log('STATUS: ' + res.statusCode);
        // }).end();

        response.render("home");
    });
}