$(document).ready(function(){$(".burger-menu").click(function(){$(".el-custom--main-menu").addClass("active")}),$(".close-mobile-menu").click(function(){$(".el-custom--main-menu").removeClass("active")}),$(window).resize(function(){$(window).width()>900&&$(".el-custom--main-menu").removeClass("active")})}),$(document).ready(function(){var e=$("#modalRegister");if(console.error("función del modal agregada"),e.length){var o=$("#openModal"),s=$(".close");o.click(function(){e.css("display","block"),$("body").addClass("no-overflow"),window.scrollTo(0,0)}),s.click(function(){e.css("display","none"),$("body").removeClass("no-overflow")})}}),$(document).ready(function(){$("select").niceSelect()}),$(document).ready(function(){$(".el-custom--banners-slides").slick({dots:!0,appendDots:$(".el-custom--banners-dots"),arrows:!0,appendArrows:$(".el-custom--banners-arrows"),autoplay:!1,responsive:[{breakpoint:900,settings:{dots:!0,arrows:!0}}]})}),$(document).ready(function(){const e=$(".el-custom--products-slide");e.length&&(e.slick({lazyLoad:"ondemand",centerMode:!0,slidesToShow:5,dots:!1,arrows:!0,adaptiveHeight:!0,appendArrows:$(".el-custom--products-arrows"),autoplay:!1,infinite:!0,speed:700,responsive:[{breakpoint:900,settings:{centerMode:!0,rows:1,slidesToShow:4,infinite:!0,variableWidth:!0}},{breakpoint:700,settings:{slidesToShow:3,variableWidth:!0}},{breakpoint:600,settings:{variableWidth:!1,slidesToShow:1.78}},{breakpoint:400,settings:{variableWidth:!1,slidesToShow:1.9}}]}),$("div.products--card").click(function(){const o=$(this).attr("data-attr-index");e.slick("slickGoTo",o-1)}))});