$(document).ready(function(){var n=$(".abi--top-banner-pilsenextra").length;console.info(n,"encontrada"),n&&0==$("body.agegate-visible").length&&$("footer.abi--main-main-footer").addClass("lateral-tessellation");var i=$(".abi--main-navigation");$(".open-drawer").on("click",function(){$("body").addClass("no-scroll"),i.addClass("active")}),$(".close-drawer").on("click",function(){$("body").removeClass("no-scroll"),i.removeClass("active")});var a=$(".abi--center-banner-social--gallery-wrapper-sliders.owl-carousel");a.length>=1&&a.owlCarousel({items:4,loop:!0,responsive:{0:{items:1.5,margin:10,center:!1,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")},420:{margin:10,items:2.8,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")},600:{margin:10,items:3.5,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")},710:{margin:10,items:4,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")},960:{items:4,loop:!1,navContainer:$(".abi--main-container--gallery-wrapper-sliders--navigation")}}});var o=$(".abi--main-sliders.owl-carousel");o.length>=1&&o.owlCarousel({items:1,loop:!0,navContainer:$(".abi--main-sliders-navigation"),dotsContainer:$(".abi--main-sliders-dots")});var e=$(".abi--main-container--body-sliders.owl-carousel");e.length>=1&&e.owlCarousel({items:4,loop:!0,video:!0,responsive:{0:{items:1,margin:10,center:!1,navContainer:$(".abi--main-container--body-sliders--navigation")},420:{margin:10,items:2,navContainer:$(".abi--main-container--body-sliders--navigation")},600:{margin:10,items:2,navContainer:$(".abi--main-container--body-sliders--navigation")},710:{items:4,margin:10,navContainer:$(".abi--main-container--body-sliders--navigation")},960:{items:4,margin:10,loop:!1,navContainer:$(".abi--main-container--body-sliders--navigation")}}});var s=0;const r=$(".abi-main--home-wrapper--middle-mountains-scroll"),t=$(".abi-main--home-wrapper--bottom-mountains-scroll");if(r.length&&t.length){function l(n,i,a){return"plus"==i?parseInt(n.replace("%","").replace("-",""))+a:parseInt(n.replace("%","").replace("-",""))-a}$(window).on("scroll",function(){var n=$(this).scrollTop(),i=0,a=0,o=$(window).width();n=$(this).scrollTop();o>599?(n>s?o>=1280?(a=l(t.css("background-position-x"),"plus",3),i=l(r.css("background-position-x"),"plus",10)):o<1280&&(a=l(t.css("background-position-x"),"plus",3),i=l(r.css("background-position-x"),"minus",10)):o>=1280?(a=l(t.css("background-position-x"),"minus",3),i=l(r.css("background-position-x"),"minus",10)):o<1280&&(i+=l(r.css("background-position-x"),"plus",10),a=l(t.css("background-position-x"),"minus",3)),s=n,r.css({"background-position-x":i+"%"}),t.css({"background-position-x":a+"%"})):(r.css({"background-position-x":0}),t.css({"background-position-x":"center"}))})}});