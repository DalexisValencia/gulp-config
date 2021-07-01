(function($) {
    $(document).ready(function() {
        $(".close-menu").click(function() {
            $(".abi--main-header nav").removeClass("active");
        })
        $(".open-mobile-menu").click(function() {
            console.error("click dado")
            $(".abi--main-header nav").addClass("active");
        })
    })
})(jQuery);