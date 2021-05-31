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
    const history_slider = $(".el-custom--history-page");
    const slider = $('.el-custom--history-page__slider');
    console.error(history_slider.length, 'history_slider.length')
    if (history_slider.length) {
        function createHistoryDots() {
            console.info("askjdklasjdl")
            var sliders = $('.el-custom--history-page__slider .el-custom--history-page__slide');
            for (let index = 0; index < sliders.length; index++) {
                const currentSlide = $(sliders[index]);
                const slideName = currentSlide.attr('data-attr-history-name');
                const slideUrl = currentSlide.attr('id');
                const active = index == 0 ? 'slick-active' : '';
                $(".el-custom--history-page__slider-navigation ul.slick-dots").append(
                    "<li class='" + active + "'><a class='dot' href='#" + slideUrl + "'>" + slideName + "</a></li>"
                );
            }
        }

        createHistoryDots();
    }

    // $(window).on("scroll", function(){
    // const header = $(".el-custom--header");
    // const bannerHistory = $('header.el-custom--history-page__header');
    // const startScroll = header.innerHeight() + bannerHistory.innerHeight();
    // const scrollInfo = window.scrollY;
    // console.info(startScroll, 'startScroll');
    // // if (startScroll > scrollInfo) {
    //     $(".el-custom--history-page__slider .el-custom--history-page__slide").each(function(){
    //         const element = $(this);
    //         const innerHeightElement = element.innerHeight();
    //         console.log(innerHeightElement, 'innerHeightElement')
    //         // if(scrollInfo < innerHeightElement){
    //         //     element.css("border", "10px solid magenta");
    //         // }
    //     });
    // // }
    // console.error(window.scrollY);
    // checkingScroll();
    // });

    // function checkingScroll(){
    // const element = $('#slide3');

    // const footer = $(".el-custom--footer");
    // const totalElementScrollWithElements = (element.innerHeight() * 2) + (header.innerHeight() + footer.innerHeight())
    // console.info(totalElementScrollWithElements, 'other')
    // console.warn(element.innerHeight() * 2);
    // var top_of_element = slideTest.offset().top;
    // var bottom_of_element = slideTest.offset().top + slideTest.outerHeight();
    // var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    // var top_of_screen = $(window).scrollTop();

    // if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    //     console.error('isVisible');
    // } else {
    //     // the element is not visible, do something else
    // }
    // } 
    // $('.el-custom--history-page__slider-navigation ul.slick-dots li').on('click', function(){
    //     $('.el-custom--history-page__slider-navigation ul.slick-dots li').removeClass('slick-active');
    //     $(this).addClass('slick-active');

    // });
    // $('.el-custom--history-page__slider').slick({
    //     initialSlide: 0,
    //     rows: 0,
    //     autoplay: false,
    //     arrows: false,
    //     dots: true,
    //     customPaging: function(slider, i) {
    //         const index = i;
    //         var sliders = $('.el-custom--history-page__slider .el-custom--history-page__slide')[index];
    //         var slideName = $(sliders).attr('data-attr-history-name')
    //         return '<span class="dot">'+slideName+'</span>';
    //       },
    //     slidesToShow: 1,
    //     draggable: true,
    //     infinite: false,
    //     vertical: true,
    //     speed: 1000,
    //     useTransform: true,
    //     cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    // });
    // //scroll
    // slider.on('wheel', (function(e) {
    //     e.preventDefault();
    //     if (e.originalEvent.deltaY < 0) {
    //       $(this).slick('slickNext');
    //     } else {
    //       $(this).slick('slickPrev');
    //     }
    // }));
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
    if (bannerProducts.length) {
        bannerProducts.slick({
            focusOnSelect: true,
            lazyLoad: 'ondemand',
            centerMode: true,
            slidesToShow: 4.99,
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
                        slidesPerRow: 4,
                        adaptiveHeight: true,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 1.78,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        variableWidth: false,
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
            hidethirdInactive();
            addClassToDetails();
        });
        

        $("div.products--card").click(function(){
            const index = $(this).attr('data-attr-index');
            bannerProducts.slick('slickGoTo', index -1);
            hidethirdInactive();
            addClassToDetails();
        });

        function hidethirdInactive() {
            const realWidth = jQuery( window ).width();
            $("div.products--card").removeClass('no-visible');
            if(realWidth > 600) {
                $("div.products--card.slick-slide.slick-current.slick-active.slick-center").prev().prev().prev().addClass('no-visible');
                $("div.products--card.slick-slide.slick-current.slick-active.slick-center").next().next().next().addClass('no-visible');
            }
            else if (realWidth < 600) {
                $("div.products--card.slick-slide.slick-current.slick-active.slick-center").prev().addClass('no-visible');
                $("div.products--card.slick-slide.slick-current.slick-active.slick-center").next().addClass('no-visible');
            }
        }

        function addClassToDetails () {
            setTimeout(() => {
                $(".el-custom--details").addClass('reload');
                addContentToDetail ()
            }, 500);
        }

        function addContentToDetail () {
            const activeSlide = $("div.products--card.slick-slide.slick-current.slick-active.slick-center");
            const details_container = $(".el-custom--details");
            const attrIndex = activeSlide.attr("data-attr-index");
            const attrDescription = activeSlide.attr("data-attr-description");
            const attrImg = activeSlide.attr("data-attr-img");
            const attTitle = activeSlide.attr("data-atrr-titulo");
            const attArray = activeSlide.attr("data-atrr-array");
            
            if (details_container.attr('data-container-parent') != attrIndex) {
                var parentUl = details_container.find('.el-custom--details--body .el-custom--details--body-product-details .el-custom--details--body-product-details-nutritional ul');
                details_container.attr('data-container-parent', attrIndex);
                details_container.find('.el-custom--details--body .el-custom--details--body-product-details h2.el--custom__title').text(attTitle);
                details_container.find('.el-custom--details--body .el-custom--details--body-product-details .el--custom__description').html(attrDescription);
                details_container.find('.el-custom--details--body .el-custom--details--body-wrapper-image').find('img').attr('src', attrImg);
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

        hidethirdInactive();
        addClassToDetails();
    }

    $(window).resize(function(){
        hidethirdInactive();
    });
});
$(document).ready(function() {
    const logo = $('img.logo');
    if (logo.hasClass("cristal")) {
        logo.attr("src", "assets/logo-cristal.svg");
    }
});