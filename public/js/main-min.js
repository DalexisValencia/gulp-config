$(document).ready(function(){$(".burger-menu").click(function(){$(".el-custom--main-menu").addClass("active")}),$(".close-mobile-menu").click(function(){$(".el-custom--main-menu").removeClass("active")}),$(window).resize(function(){$(window).width()>900&&$(".el-custom--main-menu").removeClass("active")})}),$(document).ready(function(){$(".el-custom--banners-slides").slick({dots:!0,appendDots:$(".el-custom--banners-dots"),arrows:!1,autoplay:!1,responsive:[{breakpoint:900,settings:{dots:!1,arrows:!0,appendArrows:$(".el-custom--banners-dots")}}]}),$("#el-custom--flavors-card").slick({slidesToShow:4,dots:!0,appendDots:$(".no-one"),arrows:!1,autoplay:!1,responsive:[{breakpoint:600,settings:{slidesToShow:2.35,slidesPerRow:2.35,adaptiveHeight:!1,swipe:!0,infinite:!1,rows:1}}]}),$("#el-custom--flavors__big-slide").slick({slidesToShow:3,dots:!1,initialSlide:0,speed:700,slidesToScroll:1,arrows:!0,variableWidth:!0,autoplay:!1,adaptiveHeight:!0,responsive:[{breakpoint:1250,settings:{slidesToShow:4,slidesPerRow:4,swipe:!0,infinite:!0,arrows:!0,variableWidth:!1}},{breakpoint:900,settings:{slidesToShow:3,slidesPerRow:3,swipe:!0,infinite:!0,arrows:!0,variableWidth:!1}},{breakpoint:600,settings:{slidesToShow:2.35,slidesPerRow:2.35,swipe:!0,infinite:!0,arrows:!1,variableWidth:!1}}]}),$("#el-custom--flavors-page__sliders").slick({dots:!0,appendDots:$(".el-custom--flavors-slider--navigation"),arrows:!1,autoplay:!1,responsive:[{breakpoint:900,settings:{dots:!1,swipe:!0,infinite:!0,arrows:!0,appendArrows:$(".el-custom--flavors-slider--navigation")}}]}).on("beforeChange",function(s,e,i,o){console.log(o,"pilas"),$("header.el-custom--flavors-page__slider-navigation").attr("class","el-custom--flavors-page__slider-navigation"),$("header.el-custom--flavors-page__slider-navigation").addClass("header-"+o),$("#el-custom--flavors-page__sliders").removeClass().addClass("slick-initialized slick-slider bg-"+o),$(".el-custom-flavors-page").removeClass().addClass("el-custom-flavors-page color-"+o)});var s=window.location.pathname;if(-1!=s.indexOf("sabores")){var e=s.split("/")[2];null!=e&&($("#el-custom--flavors-page__sliders").slick("slickGoTo",e),$(".el-custom--main-menu li.nav-item:nth-child(4)").addClass("active"))}});