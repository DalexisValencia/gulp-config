$(document).ready(function(){var n=$(".abi--main-navigation");$(".open-drawer").on("click",function(){$("body").addClass("no-scroll"),n.addClass("active")}),$(".close-drawer").on("click",function(){$("body").removeClass("no-scroll"),n.removeClass("active")});var a=$(".abi-main--home--section-gallery--singers__container--gallery.owl-carousel"),i=$(".abi-main--home--section-gallery--singers__navigation"),o=$(".abi-main--home--section-gallery--singers__navigation--dots");a.length>=1&&i.length>=1&&a.owlCarousel({items:4,loop:!0,video:!0,responsive:{0:{margin:10,items:2.5,nav:!0,navContainer:i,dotsContainer:o},600:{margin:10,items:2.5,nav:!0,navContainer:i,dotsContainer:o},710:{items:3,margin:10,nav:!0,navContainer:i,dotsContainer:o},960:{items:3,margin:50,loop:!0,nav:!0,navContainer:i,dotsContainer:o}}});var e=$(".abi-main--home--section-interestyou__gallery.owl-carousel"),s=$(".abi-main--home--section-interestyou__gallery__navigation--dots");e.length>=1&&s.length>=1&&e.owlCarousel({items:4,loop:!0,video:!0,responsive:{0:{margin:10,items:1.5,nav:!1,dotsContainer:s},600:{margin:10,items:2.5,nav:!1,dotsContainer:s},710:{items:3,margin:10,nav:!1,dotsContainer:s},960:{items:3,margin:50,loop:!0,nav:!1,dotsContainer:s}}});var t=$(".el-custom--button.play-video");t.length&&t.on("click",function(){const n=t.siblings(".abi-main--ourcause-ours-section--video__img"),a=t.siblings(".abi-main--ourcause-ours-section--video__iframe");n.addClass("playing"),a.addClass("playing"),$(this).addClass("playing"),a.attr("src",a.attr("src")+"?autoplay=true")})});