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
    var slidersGenreation = $(".abi--clubcolombia-flavor-travel__products.owl-carousel");
    if (slidersGenreation.length >= 1) {
        // var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");

        slidersGenreation.owlCarousel({
            items: 4,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    marging: 10,
                    center: true,
                    navContainer: $(".abi--clubcolombia-flavor-travel__carousel-nav")
                },
                590: {
                    items: 2,
                    navContainer: $(".abi--clubcolombia-flavor-travel__carousel-nav")
                },
                760: {
                    items: 3,
                    navContainer: $(".abi--clubcolombia-flavor-travel__carousel-nav")
                },
                960: {
                    items: 4
                }
            }
        });
    }
})