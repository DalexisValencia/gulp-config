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

var modal = document.getElementById("modalRegister");

var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
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
    // $('#el-custom--flavors__big-slide').slick({
    //     slidesToShow: 3,
    //     dots: false,
    //     // appendDots: $('.no-one'),
    //     arrows: true,
    //     autoplay: false,
    //     responsive: [{
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2.35,
    //             slidesPerRow: 2.35,
    //             swipe: true,
    //             infinite: false,
    //             arrows: false,
    //         }
    //     }]
    // });
    // //prueba:
    
    // $('#el-custom--flavors-page__sliders').slick({
    //     dots: true,
    //     appendDots: $('.el-custom--flavors-slider--navigation'),
    //     arrows: false,
    //     autoplay: false,
    //     responsive: [{
    //         breakpoint: 900,
    //         settings: {
    //             dots: false,
    //             swipe: true,
    //             infinite: true,
    //             arrows: true,
    //             appendArrows: $('.el-custom--flavors-slider--navigation'),
    //         }
    //     }]
    // }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    //     console.log(nextSlide, 'pilas');
    //     $("header.el-custom--flavors-page__slider-navigation").attr('class', 'el-custom--flavors-page__slider-navigation');
    //     $("header.el-custom--flavors-page__slider-navigation").addClass('header-' + nextSlide)

    //     $("#el-custom--flavors-page__sliders").removeClass().addClass('slick-initialized slick-slider bg-' + nextSlide)
    //     $('.el-custom-flavors-page').removeClass().addClass('el-custom-flavors-page color-' + nextSlide);
    // });

    // var pathname = window.location.pathname;

    // if(pathname.indexOf('sabores') != -1) {
    //     var findIndex = pathname.split("/")[2];
    //     console.error(findIndex, 'indes');
    //     if(findIndex != null){
    //         console.info('ahora vamos')
    //         // $('#el-custom--flavors-page__sliders').slick('slickGoTo', 3);
    //     }
    // }
});
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
        $("div.products--card").click(function(){
            const index = $(this).attr('data-attr-index');
            bannerProducts.slick('slickGoTo', index -1);
        });
    }
});