$( document ).ready(function() {
    $('.burger-menu').click(function(){
        console.error('la info!!');
        $('.el-custom--mobile-menu').show('slow');
    })

    $(window).resize(function(){
        if ($( window ).width() > 900) {
            $('.el-custom--mobile-menu').hide('slow');
        }
    })
})