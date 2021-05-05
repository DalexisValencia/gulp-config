$(document).ready(function() {
    const bannerProducts = $(".el-custom--products-slide");
    if (bannerProducts.length) {
        bannerProducts.slick({
            centerMode: true,
            slidesToShow: 5,
            dots: false,
            arrows: true,
            adaptiveHeight: true,
            appendArrows: $(".el-custom--products-arrows"),
            autoplay: false,
            infinite: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                        slidesPerRow: 3,
                        adaptiveHeight: false,
                        swipe: true,
                        infinite: true,
                        rows: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        centerMode: true,
                        slidesToShow: 2,
                        slidesPerRow: 2,
                        adaptiveHeight: true,
                        swipe: true,
                        infinite: true,
                        rows: 1,
                    },
                },
            ]
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            console.log(nextSlide, 'pilas');
        });
        $("div.products--card").click(function(){
            const index = $(this).attr('data-attr-index');
            bannerProducts.slick('slickGoTo', index -1);
        });
    }
});