$(document).ready(function() {
    const bannerProducts = $(".el-custom--products-slide");
    if (bannerProducts.length) {
        console.error('ejecutamos este bloque');
        bannerProducts.slick({
            // centerMode: true,
            slidesToShow: 5,
            dots: false,
            arrows: true,
            adaptiveHeight: true,
            appendArrows: $(".el-custom--products-arrows"),
            autoplay: false,
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
                        slidesToShow: 2,
                        slidesPerRow: 2,
                        adaptiveHeight: false,
                        swipe: true,
                        infinite: true,
                        rows: 1,
                    },
                },
            ]
        });
    }
});