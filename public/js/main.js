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
    if ($('#how-to-participe-sliders').length) {
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            navContainer: '.how-to-participe-navigation'
        });
    }
    if ($('#questionnaire--questions').length) {
        $('.questionnaire--questions.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            dotsContainer: '.questionnaire--navigation',
            nav: false,
            mouseDrag: false,
            touchDrag: false,
        });
    }
})(jQuery);