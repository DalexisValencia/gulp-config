$(document).ready(function() {
    $('.burger-menu').click(function() {
        $('.el-custom--mobile-menu').show('slow');
    })
    $('.close-mobile-menu').click(function() {
        $('.el-custom--mobile-menu').hide('slow');
    })

    $(window).resize(function() {
        if ($(window).width() > 900) {
            $('.el-custom--mobile-menu').hide('slow');
        }
    })
})