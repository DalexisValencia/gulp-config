$(document).ready(function(){$(".burger-menu").click(function(){$(".el-custom--main-menu").addClass("active")}),$(".close-mobile-menu").click(function(){$(".el-custom--main-menu").removeClass("active")}),$(window).resize(function(){$(window).width()>900&&$(".el-custom--main-menu").removeClass("active")})}),$(document).ready(function(){const e=$(".el-custom--home-page"),t=$(".el-custom--home-page-container.el-left").find(".el-custom-home-page-cristal-img"),s=$(".el-custom--home-page-container.el-right").find(".el-custom-home-page-cristal-img"),i=$(window).width();e.length&&(i>600?$(".el-custom--home-page-container").click(function(){const o=Math.abs(i>900?235:160),a=i/2-o;t.css({"margin-left":a+"px"}),s.css({"margin-left":"-"+a+"px"}),setTimeout(()=>{t.addClass("cheers-left-animation"),s.addClass("cheers-right-animation"),setTimeout(()=>{e.addClass("open-doors"),setTimeout(()=>{window.location.href="/cristal-bicolor"},2e3)},1e3)},500)}):i<600&&$(".el-custom--home-page-container").click(function(){window.location.href="/cristal-bicolor"}))}),$(document).ready(function(){var e=$("#modalRegister");if(console.error("función del modal agregada"),e.length){var t=$("#openModal"),s=$(".close");t.click(function(){e.css("display","block"),$("body").addClass("no-overflow"),window.scrollTo(0,0)}),s.click(function(){e.css("display","none"),$("body").removeClass("no-overflow")})}}),$(document).ready(function(){$("select").niceSelect()}),$(document).ready(function(){$(".el-custom--banners-slides").slick({dots:!0,appendDots:$(".el-custom--banners-dots"),arrows:!0,appendArrows:$(".el-custom--banners-arrows"),autoplay:!1,responsive:[{breakpoint:900,settings:{dots:!0,arrows:!0}}]})}),$(document).ready(function(){const e=$(".el-custom--products-slide");if(e.length){function t(){const e=jQuery(window).width();$("div.products--card").removeClass("no-visible"),e>600?($("div.products--card.slick-slide.slick-current.slick-active.slick-center").prev().prev().prev().addClass("no-visible"),$("div.products--card.slick-slide.slick-current.slick-active.slick-center").next().next().next().addClass("no-visible")):e<600&&($("div.products--card.slick-slide.slick-current.slick-active.slick-center").prev().addClass("no-visible"),$("div.products--card.slick-slide.slick-current.slick-active.slick-center").next().addClass("no-visible"))}function s(){setTimeout(()=>{$(".el-custom--details").addClass("reload"),function(){const e=$("div.products--card.slick-slide.slick-current.slick-active.slick-center"),t=$(".el-custom--details"),s=e.attr("data-attr-index"),i=e.attr("data-attr-description"),o=e.attr("data-attr-img"),a=e.attr("data-atrr-titulo"),c=e.attr("data-atrr-array");if(t.attr("data-container-parent")!=s){var n=t.find(".el-custom--details--body .el-custom--details--body-product-details .el-custom--details--body-product-details-nutritional ul");t.attr("data-container-parent",s),t.find(".el-custom--details--body .el-custom--details--body-product-details h2.el--custom__title").text(a),t.find(".el-custom--details--body .el-custom--details--body-product-details .el--custom__description").html(i),t.find(".el-custom--details--body .el-custom--details--body-wrapper-image").find("img").attr("src",o);var l=c.split(",");n.empty();for(let e=0;e<l.length;e++)if(e%2==0){var d=$("<li></li>"),r=$("<span></span>").text(l[e]),u=$("<span></span>").text(l[e+1]);d.append(r,u),n.append(d)}}}()},500)}e.slick({focusOnSelect:!0,lazyLoad:"ondemand",centerMode:!0,slidesToShow:4.99,dots:!1,arrows:!0,adaptiveHeight:!0,appendArrows:$(".el-custom--products-arrows"),autoplay:!1,infinite:!0,speed:400,responsive:[{breakpoint:740,settings:{slidesToShow:3,slidesPerRow:4,adaptiveHeight:!0,infinite:!0}},{breakpoint:600,settings:{variableWidth:!1,slidesToShow:1.78}},{breakpoint:400,settings:{variableWidth:!1,slidesToShow:1.9}}]}).on("beforeChange",function(e,t,i,o){s(),$(".el-custom--details").removeClass("reload")}).on("afterChange",function(e,i,o,a){t(),s()}),$("div.products--card").click(function(){const i=$(this).attr("data-attr-index");e.slick("slickGoTo",i-1),t(),s()}),t(),s()}$(window).resize(function(){t()})}),$(document).ready(function(){const e=$("img.logo");console.error(e),e.hasClass("cristal")&&e.attr("src","assets/logo-cristal.png")});