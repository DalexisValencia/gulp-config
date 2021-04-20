$(document).ready(function() {
    $('.burger-menu').click(function() {
        $('.el-custom--mobile-menu').show('slow');
    })
    $('.close-mobile-menu').click(function() {
        $('.el-custom--mobile-menu').hide('slow');
    })

    $(window).resize(function() {
        if ($(window).width() > 900) {
            $('.el-custom--mobile-menu').hide('slow');
        }
    })
})
$(document).ready(function() {
    $('select').niceSelect();
});
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
                swipe: true,
                infinite: false,
            }
        }]
    });
    $('#el-custom--flavors__big-slide').slick({
        slidesToShow: 3,
        dots: false,
        // appendDots: $('.no-one'),
        arrows: true,
        autoplay: false,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2.35,
                slidesPerRow: 2.35,
                swipe: true,
                infinite: false,
                arrows: false,
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
        console.log(nextSlide, 'pilas');
        $("header.el-custom--flavors-page__slider-navigation").attr('class', 'el-custom--flavors-page__slider-navigation');
        $("header.el-custom--flavors-page__slider-navigation").addClass('header-' + nextSlide)

        $("#el-custom--flavors-page__sliders").removeClass().addClass('slick-initialized slick-slider bg-' + nextSlide)
        $('.el-custom-flavors-page').removeClass().addClass('el-custom-flavors-page color-' + nextSlide);
    });
});