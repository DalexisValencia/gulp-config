$(document).ready(function(){$(".burger-menu").click(function(){$(".el-custom--main-menu").addClass("active")}),$(".close-mobile-menu").click(function(){$(".el-custom--main-menu").removeClass("active")}),$(window).resize(function(){$(window).width()>900&&$(".el-custom--main-menu").removeClass("active")})}),$(document).ready(function(){const t=$(".el-custom--home-page"),e=$(".el-custom--home-page-container.el-left").find(".el-custom-home-page-cristal-img"),s=$(".el-custom--home-page-container.el-right").find(".el-custom-home-page-cristal-img"),i=$(window).width();t.length&&(i>600?$(".el-custom--home-page-container").click(function(){const o=Math.abs(i>900?235:160),a=i/2-o;e.css({"margin-left":a+"px"}),s.css({"margin-left":"-"+a+"px"}),setTimeout(()=>{e.addClass("cheers-left-animation"),s.addClass("cheers-right-animation"),setTimeout(()=>{t.addClass("open-doors"),setTimeout(()=>{window.location.href="/cristal-bicolor"},2e3)},1e3)},500)}):i<600&&$(".el-custom--home-page-container").click(function(){window.location.href="/cristal-bicolor"}))}),$(document).ready(function(){const t=$(".el-custom--history-page");$(".el-custom--history-page__slider");if(console.error(t.length,"history_slider.length"),t.length){!function(){console.info("askjdklasjdl");var t=$(".el-custom--history-page__slider .el-custom--history-page__slide");for(let e=0;e<t.length;e++){const s=$(t[e]),i=s.attr("data-attr-history-name"),o=s.attr("id"),a=0==e?"slick-active":"";$(".el-custom--history-page__slider-navigation ul.slick-dots").append("<li class='"+a+"'><a class='dot' href='#"+o+"'>"+i+"</a></li>")}}()}}),$(document).ready(function(){var t=$("#modalRegister");if(console.error("función del modal agregada"),t.length){var e=$("#openModal"),s=$(".close");e.click(function(){t.css("display","block"),$("body").addClass("no-overflow"),window.scrollTo(0,0)}),s.click(function(){t.css("display","none"),$("body").removeClass("no-overflow")})}}),$(document).ready(function(){}),$(document).ready(function(){$(".el-custom--banners-slides").slick({dots:!0,appendDots:$(".el-custom--banners-dots"),arrows:!0,appendArrows:$(".el-custom--banners-arrows"),autoplay:!1,responsive:[{breakpoint:900,settings:{dots:!0,arrows:!0}}]})}),$(document).ready(function(){const t=$(".el-custom--products-slide");if(t.length){function e(){const t=jQuery(window).width();$("div.products--card").removeClass("no-visible"),t>600?($("div.products--card.slick-slide.slick-current.slick-active.slick-center").prev().prev().prev().addClass("no-visible"),$("div.products--card.slick-slide.slick-current.slick-active.slick-center").next().next().next().addClass("no-visible")):t<600&&($("div.products--card.slick-slide.slick-current.slick-active.slick-center").prev().addClass("no-visible"),$("div.products--card.slick-slide.slick-current.slick-active.slick-center").next().addClass("no-visible"))}function s(){setTimeout(()=>{$(".el-custom--details").addClass("reload"),function(){const t=$("div.products--card.slick-slide.slick-current.slick-active.slick-center"),e=$(".el-custom--details"),s=t.attr("data-attr-index"),i=t.attr("data-attr-description"),o=t.attr("data-attr-img"),a=t.attr("data-atrr-titulo"),n=t.attr("data-atrr-array");if(e.attr("data-container-parent")!=s){var c=e.find(".el-custom--details--body .el-custom--details--body-product-details .el-custom--details--body-product-details-nutritional ul");e.attr("data-container-parent",s),e.find(".el-custom--details--body .el-custom--details--body-product-details h2.el--custom__title").text(a),e.find(".el-custom--details--body .el-custom--details--body-product-details .el--custom__description").html(i),e.find(".el-custom--details--body .el-custom--details--body-wrapper-image").find("img").attr("src",o);var l=n.split(",");c.empty();for(let t=0;t<l.length;t++)if(t%2==0){var r=$("<li></li>"),d=$("<span></span>").text(l[t]),u=$("<span></span>").text(l[t+1]);r.append(d,u),c.append(r)}}}()},500)}t.slick({focusOnSelect:!0,lazyLoad:"ondemand",centerMode:!0,slidesToShow:4.99,dots:!1,arrows:!0,adaptiveHeight:!0,appendArrows:$(".el-custom--products-arrows"),autoplay:!1,infinite:!0,speed:400,responsive:[{breakpoint:740,settings:{slidesToShow:3,slidesPerRow:4,adaptiveHeight:!0,infinite:!0}},{breakpoint:600,settings:{variableWidth:!1,slidesToShow:1.78}},{breakpoint:400,settings:{variableWidth:!1,slidesToShow:1.9}}]}).on("beforeChange",function(t,e,i,o){s(),$(".el-custom--details").removeClass("reload")}).on("afterChange",function(t,i,o,a){e(),s()}),$("div.products--card").click(function(){const i=$(this).attr("data-attr-index");t.slick("slickGoTo",i-1),e(),s()}),e(),s()}$(window).resize(function(){e()})}),$(document).ready(function(){const t=$("img.logo");t.hasClass("cristal")&&t.attr("src","assets/logo-cristal.svg")});