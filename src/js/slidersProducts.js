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
                // {
                //     breakpoint: 740,
                //     settings: {
                //         centerMode: true,
                //         rows: 1,
                //         slidesToShow: 4,
                //         infinite: true,
                //         variableWidth: true
                //     }
                // },
                // {
                //     breakpoint: 700,
                //     settings: {
                //         slidesToShow: 3,
                //         variableWidth: true
                //     }
                // },
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
        .on('afterChange', function(event, slick, currentSlide, nextSlide) {
            // console.log(nextSlide, 'pilas');
            hidethirdInactive();
        })
        .on('init', function(event, slick, currentSlide, nextSlide) {
            // console.log(nextSlide, 'pilas');
            hidethirdInactive();
        });
        $("div.products--card").click(function(){
            const index = $(this).attr('data-attr-index');
            bannerProducts.slick('slickGoTo', index -1);
            hidethirdInactive();
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
    }

    $(window).resize(function(){
        hidethirdInactive();
    });
});