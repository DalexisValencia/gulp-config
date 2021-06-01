$(document).ready(function() {
    $('.burger-menu').click(function() {
        $('.el-custom--main-menu').addClass('active');
    })
    $('.close-mobile-menu').click(function() {
        $('.el-custom--main-menu').removeClass('active');
    })

    $(window).resize(function() {
        if ($(window).width() > 900) {
            $('.el-custom--main-menu').removeClass('active')
        }
    })
})
$(document).ready(function(){
    const home = $(".el-custom--home-page");
    const leftBottle = $(".el-custom--home-page-container.el-left").find('.el-custom-home-page-cristal-img');
    const rightBottle = $(".el-custom--home-page-container.el-right").find('.el-custom-home-page-cristal-img');
    const windowWidth = $(window).width();
    
    if(home.length) {
        if (windowWidth > 600) {
            $(".el-custom--home-page-container").click(function(){
                const valueToReduce = Math.abs(windowWidth > 900 ? 235 : 160);
                const translateByBottle = (windowWidth / 2) - valueToReduce;
                leftBottle.css({
                    "margin-left": translateByBottle+"px",
                });
                rightBottle.css({
                    "margin-left": "-"+translateByBottle+"px",
                })
                setTimeout(() => {
                    leftBottle.addClass('cheers-left-animation');
                    rightBottle.addClass('cheers-right-animation');
                    setTimeout(() => {
                        home.addClass('open-doors');
                        setTimeout(() => {
                            window.location.href = "/cristal-bicolor";
                            // console.warn('las pueras se abren');
                        }, 2000);
                    }, 1000);
                }, 500);
            });
        } else if ( windowWidth < 600 ) {
            $(".el-custom--home-page-container").click(function(){
                window.location.href = "/cristal-bicolor";
            });
        }
    }
});

$(document).ready(function() {
    var modal = $("#modalRegister");
    console.error('función del modal agregada');
    if(modal.length){
        var btn = $("#openModal");
        var span = $(".close");

        btn.click(function() {
            modal.css("display", "block");
            $("body").addClass("no-overflow");
            window.scrollTo(0, 0);
        });

        span.click(function() {
            modal.css("display", "none");
            $("body").removeClass("no-overflow");
    });
    }
});
$(document).ready(function() {
    // $('select').niceSelect();
});
$(document).ready(function() {
    $('.el-custom--banners-slides').slick({
        dots: true,
        appendDots: $('.el-custom--banners-dots'),
        arrows: true,
        appendArrows: $('.el-custom--banners-arrows'),
        autoplay: false,
        responsive: [{
            breakpoint: 900,
            settings: {
                dots: true,
                arrows: true,
                // appendArrows: $('.el-custom--banners-dots'),
            }
        }]
    });
});
$(document).ready(function() {
    const bannerProducts = $(".el-custom--products-slide");
    const totalProducts = $(".products--card");
    $(".el-custom--products-slide").css("max-width", (totalProducts.length * 300) + 'px');
   
    bannerProducts.slick({
        focusOnSelect: true,
        lazyLoad: 'ondemand',
        centerMode: true,
        // slidesToShow: 4.99,
        slidesToShow: totalProducts.length > 5 ? 5 : totalProducts.length,
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        appendArrows: $(".el-custom--products-arrows"),
        autoplay: false,
        infinite: true,
        speed: 400,
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.73,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1.9,
            }
            },
        ]
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        addClassToDetails();
        $(".el-custom--details").removeClass('reload');
    })
    .on('afterChange', function(event, slick, currentSlide, nextSlide) {
        setTimeout(function(){
            moveMarker()
            addClassToDetails();
        }, 500);
        hidethirdInactive();
    });
    

    $("div.products--card").click(function(){
        const index = $(this).attr('data-attr-index');
        // bannerProducts.slick('slickGoTo', index -1);
        hidethirdInactive();
        addClassToDetails();
    });

    function moveMarker() {
        const currentWidth = $(window).width();
        const productActive = $("div.products--card.slick-center.slick-current");
        const markerIndicator = $(".el-custom--details .details--marker");
        // console.error(productActive.find('.products--card__description').height() / 2);
        if(currentWidth > 600) {
            //  + productActive.find('.products--card__description').height() / 2.2
            console.log(currentWidth, 'currentWidth');
            markerIndicator.css("left", (productActive.offset().left +( productActive.find('.products--card__description').height() / 2) + 20)+ "px");
        } else if (currentWidth < 600) {
            markerIndicator.css("left", 'unset');
        }
    }

    function hidethirdInactive() {
        const realWidth = jQuery( window ).width();
        const activeCenterSlide = $("div.products--card.slick-slide.slick-current.slick-active.slick-center");
        $("div.products--card").removeClass('no-visible');
        if(realWidth > 600) {
            // $("div.products--card.slick-slide.slick-current.slick-active.slick-center").prev().prev().prev().addClass('no-visible');
            // $("div.products--card.slick-slide.slick-current.slick-active.slick-center").next().next().next().addClass('no-visible');
        }
        else if (realWidth < 600) {
           $("div.products--card.slick-slide.slick-current.slick-active.slick-center").prev().addClass('no-visible');
           $("div.products--card.slick-slide.slick-current.slick-active.slick-center").next().addClass('no-visible');
        }
    }

    function addClassToDetails () {
        setTimeout(() => {
            $(".el-custom--details").addClass('reload');
        }, 500);
        addContentToDetail ()
    }

        function addContentToDetail () {
            // 
            const activeSlide = $("div.products--card.slick-slide.slick-current.slick-center");
            const details_container = $(".el-custom--details");
            const attrIndex = activeSlide.attr("data-attr-index");
            const attrDescription = activeSlide.attr("data-attr-description");
            const attrImg = activeSlide.attr("data-attr-img");
            const attrImgAlt = activeSlide.attr("data-atrr-alt");
            const attTitle = activeSlide.attr("data-atrr-titulo");
            const attArray = activeSlide.attr("data-atrr-array");
            console.error(activeSlide, 'activeSlide');
            console.info(attTitle, 'attTitle')
            
            if (details_container.attr('data-container-parent') != attrIndex) {
                var parentUl = details_container.find('.el-custom--details--body .el-custom--details--body-product-details .el-custom--details--body-product-details-nutritional ul');
                details_container.attr('data-container-parent', attrIndex);
                details_container.find('.el-custom--details--body .el-custom--details--body-product-details h2.el--custom__title').text(attTitle);
                details_container.find('.el-custom--details--body .el-custom--details--body-product-details .el--custom__description').html(attrDescription);
                details_container.find('.el-custom--details--body .el-custom--details--body-wrapper-image').find('img').attr('src', attrImg);
                details_container.find('.el-custom--details--body .el-custom--details--body-wrapper-image').find('img').attr('alt', attrImgAlt);

                if (attArray !== undefined) {
                    var splitData = attArray.split(",");
                    parentUl.empty();
    
                    for (let index = 0; index < splitData.length; index++) {
                        if(index % 2 == 0) {
                            var li = $("<li></li>");
                            var spanVal = $("<span></span>").text(splitData[index]);
                            var spanName = $("<span></span>").text(splitData[index+1]);
    
                            li.append(spanVal, spanName);
                            parentUl.append(li);
                        }
                    }
                }
            }
        } 

        hidethirdInactive();
        addClassToDetails();

    $(window).resize(function(){
        const totalWidth = $(window).width();
        moveMarker();
    });
    moveMarker();
});
$(document).ready(function() {
    const logo = $('img.logo');
    if (logo.hasClass("cristal")) {
        logo.attr("src", "assets/logo-cristal.svg");
    }
});