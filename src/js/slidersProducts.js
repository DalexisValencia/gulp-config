$(document).ready(function() {
    const bannerProducts = $(".el-custom--products-slide");
    if (bannerProducts.length) {
        bannerProducts.slick({
            lazyLoad: 'ondemand',
            centerMode: true,
            slidesToShow: 5,
            dots: false,
            arrows: true,
            adaptiveHeight: true,
            appendArrows: $(".el-custom--products-arrows"),
            autoplay: false,
            infinite: true,
            speed: 700,
            responsive: [
                // {
                //     breakpoint: 900,
                //     settings: {
                //         slidesToShow: 3,
                //         slidesPerRow: 3,
                //         adaptiveHeight: false,
                //         swipe: true,
                //         infinite: true,
                //         rows: 1,
                //     },
                // },
                {
                    breakpoint: 900,
                    settings: {
                        centerMode: true,
                        rows: 1,
                        slidesToShow: 4,
                        infinite: true,
                        variableWidth: true
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3,
                        variableWidth: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        // speed: 700,
                        // centerMode: true,
                        // rows: 1,
                        variableWidth: false,
                        slidesToShow: 1.78,
                        // infinite: true
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
        // .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        //     console.log(nextSlide, 'pilas');
        // });
        // $("div.products--card").click(function(){
        //     const index = $(this).attr('data-attr-index');
        //     bannerProducts.slick('slickGoTo', index -1);
        // });
    }
});