!function(o){o(document).ready(function(){o(".close-menu").click(function(){o(".abi--main-header nav").removeClass("active")}),o(".open-mobile-menu").click(function(){console.error("click dado"),o(".abi--main-header nav").addClass("active")})}),o("#how-to-participe-sliders").length&&o(".owl-carousel").owlCarousel({items:1,loop:!0,navContainer:".how-to-participe-navigation"}),o("#questionnaire--questions").length&&o(".questionnaire--questions.owl-carousel").owlCarousel({items:1,loop:!0,dotsContainer:".questionnaire--navigation",nav:!1,mouseDrag:!1,touchDrag:!1})}(jQuery);