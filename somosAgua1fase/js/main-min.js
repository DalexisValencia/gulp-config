$(document).ready(function(){var n=$(".abi--main-navigation");$(".open-drawer").on("click",function(){$("body").addClass("no-scroll"),n.addClass("active")}),$(".close-drawer").on("click",function(){$("body").removeClass("no-scroll"),n.removeClass("active")});var i=$(".abi--main-container--body-sliders.owl-carousel");i.length>=1&&i.owlCarousel({items:4,loop:!0,video:!0,responsive:{0:{items:1,margin:10,center:!1,navContainer:$(".abi--main-container--body-sliders--navigation")},420:{margin:10,items:2,navContainer:$(".abi--main-container--body-sliders--navigation")},600:{margin:10,items:2,navContainer:$(".abi--main-container--body-sliders--navigation")},710:{items:4,margin:10,navContainer:$(".abi--main-container--body-sliders--navigation")},960:{items:4,margin:10,loop:!1,navContainer:$(".abi--main-container--body-sliders--navigation")}}});var o=0;const a=$(".abi-main--home-wrapper--middle-mountains-scroll"),s=$(".abi-main--home-wrapper--bottom-mountains-scroll");if(a.length&&s.length){function r(n,i,o){return"plus"==i?parseInt(n.replace("%","").replace("-",""))+o:parseInt(n.replace("%","").replace("-",""))-o}$(window).on("scroll",function(){var n=$(this).scrollTop(),i=0,e=0,t=$(window).width();n=$(this).scrollTop();t>599?(n>o?t>=1280?(e=r(s.css("background-position-x"),"plus",3),i=r(a.css("background-position-x"),"plus",10)):t<1280&&(e=r(s.css("background-position-x"),"plus",3),i=r(a.css("background-position-x"),"minus",10)):t>=1280?(e=r(s.css("background-position-x"),"minus",3),i=r(a.css("background-position-x"),"minus",10)):t<1280&&(i+=r(a.css("background-position-x"),"plus",10),e=r(s.css("background-position-x"),"minus",3)),o=n,a.css({"background-position-x":i+"%"}),s.css({"background-position-x":e+"%"})):(a.css({"background-position-x":0}),s.css({"background-position-x":"center"}))})}var e=$(".el-custom--button.play-video");e.length&&e.on("click",function(){const n=e.siblings(".abi-main--ourcause-ours-section--video__img"),i=e.siblings(".abi-main--ourcause-ours-section--video__iframe");n.addClass("playing"),i.addClass("playing"),$(this).addClass("playing"),i.attr("src",i.attr("src")+"?autoplay=true")});const t=$(".abi-main--ourcause-ourbrands--slider.owl-carousel"),c=$(".abi-main--ourcause-ourbrands--slider__navigation");t.length>=1&&t.owlCarousel({items:4,loop:!0,video:!0,responsive:{0:{items:1,margin:20,center:!1,navContainer:c},420:{margin:20,items:2,navContainer:c},600:{margin:20,items:4,navContainer:c},710:{items:6,margin:20,navContainer:c},960:{items:6,margin:20,loop:!1,navContainer:c}}})});