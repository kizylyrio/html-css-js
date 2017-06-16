$(document).ready(function() {
    $("#api-tab").click(function() {
        $("#web-configuration-view").fadeOut("2.0");
    });
    $("#web-tab").click(function() {
        $("#api-configuration-view").fadeOut("2.0");
    });
});

function showAlert() {
    $(".alert").fadeIn();
    $(".alert").fadeOut(2000);
}

function saveApiConfiguration() {
    showAlert();
    $("#api-configuration-view").fadeIn();
}

function saveWebConfiguration() {
    showAlert();
    $("#web-configuration-view").fadeIn();
}