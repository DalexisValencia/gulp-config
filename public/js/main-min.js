$(document).ready(function(){$(".burger-menu").click(function(){$(".el-custom--mobile-menu").show("slow")}),$(".close-mobile-menu").click(function(){$(".el-custom--mobile-menu").hide("slow")}),$(window).resize(function(){$(window).width()>900&&$(".el-custom--mobile-menu").hide("slow")})}),$(document).ready(function(){$(".el-custom--banners-slides").slick({dots:!0,appendDots:$(".el-custom--banners-dots"),arrows:!1,autoplay:!0,responsive:[{breakpoint:900,settings:{dots:!1,arrows:!0,appendArrows:$(".el-custom--banners-dots")}}]}),$("#el-custom--flavors-card").slick({slidesToShow:4,dots:!0,appendDots:$(".no-one"),arrows:!1,autoplay:!1,responsive:[{breakpoint:600,settings:{slidesToShow:2.35,slidesPerRow:2.35,swipe:!0,infinite:!1}}]}),$("#el-custom--flavors__big-slide").slick({slidesToShow:3,dots:!1,arrows:!0,autoplay:!1,responsive:[{breakpoint:600,settings:{slidesToShow:2.35,slidesPerRow:2.35,swipe:!0,infinite:!1,arrows:!1}}]}),$("#el-custom--flavors-page__sliders").slick({dots:!0,appendDots:$(".el-custom--flavors-slider--navigation"),arrows:!1,autoplay:!1,responsive:[{breakpoint:900,settings:{dots:!1,swipe:!0,infinite:!0,arrows:!0,appendArrows:$(".el-custom--flavors-slider--navigation")}}]}).on("beforeChange",function(s,e,o,i){console.log(i,"pilas"),$("header.el-custom--flavors-page__slider-navigation").attr("class","el-custom--flavors-page__slider-navigation"),$("header.el-custom--flavors-page__slider-navigation").addClass("header-"+i),$("#el-custom--flavors-page__sliders").removeClass().addClass("slick-initialized slick-slider bg-"+i),$(".el-custom-flavors-page").removeClass().addClass("el-custom-flavors-page color-"+i)})});