$(document).ready(function(){var a=$(".abi--top-banner-pilsenextra").length;console.info(a,"encontrada"),a&&0==$("body.agegate-visible").length&&$("footer.abi--main-main-footer").addClass("lateral-tessellation");var n=$(".abi--main-navigation");$(".open-drawer").on("click",function(){$("body").addClass("no-scroll"),n.addClass("active")}),$(".close-drawer").on("click",function(){$("body").removeClass("no-scroll"),n.removeClass("active")});var i=$(".abi--center-banner-social--gallery-wrapper-sliders.owl-carousel");i.length>=1&&i.owlCarousel({items:4,loop:!0,responsive:{0:{items:1.5,margin:10,center:!1,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")},420:{margin:10,items:2.8,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")},600:{margin:10,items:3.5,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")},710:{margin:10,items:4,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")},960:{items:4,loop:!1,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")}}});var e=$(".abi--main-sliders.owl-carousel");e.length>=1&&e.owlCarousel({items:1,loop:!0,navContainer:$(".abi--main-sliders-navigation"),dotsContainer:$(".abi--main-sliders-dots")});var r=$(".abi--main-container--body-sliders.owl-carousel");r.length>=1&&r.owlCarousel({items:4,loop:!0,video:!0,responsive:{0:{items:1,margin:10,center:!1,navContainer:$(".abi--main-container--body-sliders--navigation")},420:{margin:10,items:2,navContainer:$(".abi--main-container--body-sliders--navigation")},600:{margin:10,items:2,navContainer:$(".abi--main-container--body-sliders--navigation")},710:{items:4,margin:10,navContainer:$(".abi--main-container--body-sliders--navigation")},960:{items:4,margin:10,loop:!1,navContainer:$(".abi--main-container--body-sliders--navigation")}}})});