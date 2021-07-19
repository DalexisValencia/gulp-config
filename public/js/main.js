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
                        items: 1,
                        marging: 10,
                        center: true,
                        navContainer: $(".abi--main-container--body-sliders--navigation")
                    },
                    590: {
                        items: 2,
                        navContainer: $(".abi--main-container--body-sliders--navigation")
                    },
                    760: {
                        items: 3,
                        navContainer: $(".abi--main-container--body-sliders--navigation")
                    },
                    960: {
                        items: 4
                    }
                }
            });
        }
    }
})