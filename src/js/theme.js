$(document).ready(function(){
    const logo = $('img.logo');
    console.error(logo)
    // console.error(logo.hasClass( ".cristal" ), 'logo.hasClass( ".cristal" )')
    if(logo.hasClass( "cristal" )) {
        logo.attr("src", "assets/logo-cristal.png");
    }
});