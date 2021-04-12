$( document ).ready(function() {
    console.log( "ready!" );
    $('.el-custom--banners-slides').slick({
        dots: true,
        appendDots: $('.el-custom--banners-dots'),
        arrows: false,
        autoplay: true,
    });
    $('#el-custom--flavors-card').slick({
        slidesToShow: 4,
        dots: true,
        appendDots: $('.no-one'),
        arrows: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2.35,
                    slidesPerRow: 2.35,
                    swipe: true,
                    infinite: false,
                }
            }
        ]
   });
   $('#el-custom--flavors__big-slide')                                                                                                                       .slick({
        slidesToShow: 3,
        dots: false,
        // appendDots: $('.no-one'),
        arrows: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2.35,
                    slidesPerRow: 2.35,
                    swipe: true,
                    infinite: false,
                    arrows: false,
                }
            }
        ]
    });
});