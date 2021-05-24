$(document).ready(function(){
    const slider = $('.el-custom--history-page__slider');
    $('.el-custom--history-page__slider').slick({
        // dots: false,
        // appendDots: $('.el-custom--banners-dots'),
        // arrows: false,
        // appendArrows: $('.el-custom--history-page__dots'),
        // autoplay: false,
        // slidesToShow: 1,
        // draggable: true,
        // touchMove: true,
        // vertical: true,
        // cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        // adaptiveHeight: true,
        initialSlide: 0,
        rows: 0,
        autoplay: false,
        arrows: false,
        dots: true,
        // appendArrows: $('.el-custom--history-page__dots'),
        customPaging: function(slider, i) {
            const index = i;
            var sliders = $('.el-custom--history-page__slider .el-custom--history-page__slide')[index];
            var slideName = $(sliders).attr('data-attr-history-name')
            return '<span class="dot">'+slideName+'</span>';
          },
        slidesToShow: 1,
        // centerPadding: "10px",
        draggable: true,
        infinite: true,
        vertical: true,
        speed: 1000,
        // autoplaySpeed: 2000,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        // adaptiveHeight: true,
        // responsive: [{
        //     breakpoint: 900,
        //     settings: {
        //         dots: true,
        //         arrows: true,
        //     }
        // }]
    });
    //scroll
    /*slider.on('wheel', (function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
          $(this).slick('slickNext');
        } else {
          $(this).slick('slickPrev');
        }
    }));*/
});