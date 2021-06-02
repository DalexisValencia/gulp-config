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
// $(document).ready(function() {
//     $('select').niceSelect();
// });

$(document).ready(function() {
    $('.el-custom--banners-slides').slick({
        dots: true,
        appendDots: $('.el-custom--banners-dots'),
        arrows: false,
        autoplay: false,
        responsive: [{
            breakpoint: 900,
            settings: {
                dots: false,
                arrows: true,
                appendArrows: $('.el-custom--banners-dots'),
            }
        }]
    });
    $('#el-custom--flavors-card').slick({
        slidesToShow: 4,
        dots: true,
        appendDots: $('.no-one'),
        arrows: false,
        autoplay: false,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2.35,
                slidesPerRow: 2.35,
                adaptiveHeight: false,
                swipe: true,
                infinite: false,
                rows: 1,
            }
        }]
    });
    $('#el-custom--flavors__big-slide').slick({
        slidesToShow: 3,
        dots: false,
        initialSlide: 0,
        speed: 700,
        slidesToScroll: 1,
        // appendArrows: $('.el-custom--skus-slide-arrows'),
        arrows: true,
        variableWidth: true,
        autoplay: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4,
                    slidesPerRow: 4,
                    swipe: true,
                    infinite: true,
                    arrows: true,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesPerRow: 3,
                    swipe: true,
                    infinite: true,
                    arrows: true,
                    variableWidth: false,
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2.35,
                slidesPerRow: 2.35,
                swipe: true,
                infinite: true,
                arrows: false,
                variableWidth: false,
            }
        }]
    });
    //prueba:
    
    $('#el-custom--flavors-page__sliders').slick({
        dots: true,
        appendDots: $('.el-custom--flavors-slider--navigation'),
        arrows: false,
        autoplay: false,
        responsive: [{
            breakpoint: 900,
            settings: {
                dots: false,
                swipe: true,
                infinite: true,
                arrows: true,
                appendArrows: $('.el-custom--flavors-slider--navigation'),
            }
        }]
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // console.log(nextSlide, 'pilas');
        $("header.el-custom--flavors-page__slider-navigation").attr('class', 'el-custom--flavors-page__slider-navigation');
        $("header.el-custom--flavors-page__slider-navigation").addClass('header-' + nextSlide)

        $("#el-custom--flavors-page__sliders").removeClass().addClass('slick-initialized slick-slider bg-' + nextSlide)
        $('.el-custom-flavors-page').removeClass().addClass('el-custom-flavors-page color-' + nextSlide);
    });

    var pathname = window.location.pathname;

    if(pathname.indexOf('sabores') != -1) {
        const menu = ['original', 'zero', 'camucamu', 'copoazu']
        const findByName = pathname.split("/")[2].toLocaleLowerCase();
        const findIndex = menu.indexOf(findByName);

        console.info(findIndex);
        if (findIndex != null) {
            $('#el-custom--flavors-page__sliders').slick('slickGoTo', findIndex);
            $('.el-custom--main-menu li.nav-item:nth-child(4)').addClass('active');
        }
    }
});