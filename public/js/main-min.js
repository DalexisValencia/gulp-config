$(document).ready(function(){var a=$(".abi--main-navigation");$(".open-drawer").on("click",function(){a.addClass("active")}),$(".close-drawer").on("click",function(){a.removeClass("active")});var i=$(".abi--center-banner-social--gallery-wrapper-sliders.owl-carousel");i.length>=1&&i.owlCarousel({items:4,loop:!0,responsive:{0:{items:1.5,margin:10,center:!1,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")},420:{margin:10,items:2.8,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")},600:{margin:10,items:3.5,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")},710:{margin:10,items:4,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")},960:{items:4,loop:!1,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")}}});var n=$(".abi--main-sliders.owl-carousel");if(n.length>=1){n.owlCarousel({items:1,loop:!0,navContainer:$(".abi--main-sliders-navigation"),dotsContainer:$(".abi--main-sliders-dots")});var e=$(".abi--main-container--body-sliders.owl-carousel");e.length>=1&&e.owlCarousel({items:4,loop:!0,responsive:{0:{items:1.5,margin:10,center:!1,navContainer:$(".abi--main-container--body-sliders--navigation")},420:{margin:10,items:2.8,navContainer:$(".abi--main-container--body-sliders--navigation")},600:{margin:10,items:3.5,navContainer:$(".abi--main-container--body-sliders--navigation")},710:{margin:10,items:4,navContainer:$(".abi--main-container--body-sliders--navigation")},960:{items:4,loop:!1,navContainer:$(".abi--main-container--body-sliders--navigation")}}})}});