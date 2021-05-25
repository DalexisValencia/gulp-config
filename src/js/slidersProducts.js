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
            addContentToDetail ()
            setTimeout(() => {
                $(".el-custom--details").addClass('reload');
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
            
            if(details_container.attr('data-container-parent') != attrIndex){
                console.warn("lo agregamos!")
            }
        } 

        hidethirdInactive();
        addClassToDetails();
    }

    $(window).resize(function(){
        hidethirdInactive();
    });
});