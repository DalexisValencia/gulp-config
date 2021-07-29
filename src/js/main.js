// jQuery(document).ready(function() {
//     var playVideo = $("abi--doblemalta-wrapper-generation__wrapper-video button.video-play");
//     console.info("hey")
//     if (playVideo.length) {
//         playVideo.on("click", function() {
//             console.info("ahora le damos click")
//         })
//     }

// })(jQuery);

$(document).ready(function() {
    var drawer = $(".abi--main-navigation");
    $(".open-drawer").on("click", function() {
        drawer.addClass('active');
    });
    $(".close-drawer").on("click", function() {
        drawer.removeClass('active');
    });

    var sliderCarouselNewPilsenExtra = $(".abi--center-banner-social--gallery-wrapper-sliders.owl-carousel")

    if (sliderCarouselNewPilsenExtra.length >= 1) {

        sliderCarouselNewPilsenExtra.owlCarousel({
            items: 4,
            loop: true,
            responsive: {
                0: {
                    items: 1.5,
                    margin: 10,
                    center: false,
                    navContainer: $(".abi--main-container--gallery-wrapper-sliders--navigation")
                },
                420: {
                    margin: 10,
                    items: 2.8,
                    navContainer: $(".abi--main-container--gallery-wrapper-sliders--navigation")
                },
                600: {
                    margin: 10,
                    items: 3.5,
                    navContainer: $(".abi--main-container--gallery-wrapper-sliders--navigation")
                },
                710: {
                    margin: 10,
                    items: 4,
                    navContainer: $(".abi--main-container--gallery-wrapper-sliders--navigation")
                },
                960: {
                    items: 4,
                    loop: false,
                    navContainer: $(".abi--main-container--gallery-wrapper-sliders--navigation")
                }
            }
        });

    }

    var slidersGenreation = $(".abi--main-sliders.owl-carousel");
    if (slidersGenreation.length >= 1) {
        // var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");

        slidersGenreation.owlCarousel({
            items: 1,
            loop: true,
            navContainer: $(".abi--main-sliders-navigation"),
            dotsContainer: $(".abi--main-sliders-dots")
                // responsive: {
                //     0: {
                //         items: 1,
                //         marging: 10,
                //         center: true,
                //     },
                //     590: {
                //         items: 2,
                //         navContainer: $(".abi--clubcolombia-flavor-travel__carousel-nav")
                //     },
                //     760: {
                //         items: 3,
                //         navContainer: $(".abi--clubcolombia-flavor-travel__carousel-nav")
                //     },
                //     960: {
                //         items: 4
                //     }
                // }
        });


        var slidersHome = $(".abi--main-container--body-sliders.owl-carousel");
        if (slidersHome.length >= 1) {
            slidersHome.owlCarousel({
                items: 4,
                loop: true,
                responsive: {
                    0: {
                        items: 1.5,
                        margin: 10,
                        center: false,
                        navContainer: $(".abi--main-container--body-sliders--navigation")
                    },
                    420: {
                        margin: 10,
                        items: 2.8,
                        navContainer: $(".abi--main-container--body-sliders--navigation")
                    },
                    600: {
                        margin: 10,
                        items: 3.5,
                        navContainer: $(".abi--main-container--body-sliders--navigation")
                    },
                    710: {
                        margin: 10,
                        items: 4,
                        navContainer: $(".abi--main-container--body-sliders--navigation")
                    },
                    960: {
                        items: 4,
                        loop: false,
                        navContainer: $(".abi--main-container--body-sliders--navigation")
                    }
                }
            });
        }
    }
})