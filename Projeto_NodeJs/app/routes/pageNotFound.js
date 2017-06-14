module.exports = function(app) {
    app.get('/pageNotFound', function(request, response) {
        response.render("pageNotFound");
    });
}