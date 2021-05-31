$(document).ready(function() {
    const logo = $('img.logo');
    if (logo.hasClass("cristal")) {
        logo.attr("src", "assets/logo-cristal.svg");
    }
});