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
        var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");

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

        $(".play-gallery-video").on("click", function(event) {
            const posX = event.pageX;
            const videoWrapper = $(".abi--doblemalta-wrapper-generationThatBroke--video");
            const url = $(this).attr("attr-video");
            if (url) {
                videoWrapper.css({ "left": posX + "px", "opacity": "1" });
                videoWrapper.addClass("start-animation");
                setTimeout(() => {
                    videoWrapper.removeClass("start-animation").addClass("show-video-animation");
                    setTimeout(() => {
                        $('<iframe>') // Creates the element
                            .attr('src', url) // Sets the attribute spry:region="myDs"
                            .attr('allow', 'autoplay')
                            .attr('class', 'generated-iframe')
                            .appendTo('.abi--doblemalta-wrapper-generationThatBroke--video');
                    }, 150);
                }, 400);
            }
        })

        $(".close-video").on("click", function() {
            const videoWrapper = $(".abi--doblemalta-wrapper-generationThatBroke--video");
            $('.generated-iframe').remove();
            videoWrapper.css('opacity', '0');
            videoWrapper.attr('style', '');
            videoWrapper.removeClass('start-animation').removeClass('show-video-animation');
        });
    }

    var mainBanners = $(".abi--doblemalta__container-slide.owl-carousel");

    if (mainBanners.length == 1) {
        mainBanners.owlCarousel({
            loop: true,
            autoplay: true,
            items: 1,
            nav: false,
            autoplayHoverPause: true,
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
            dotsContainer: $('.abi--doblemalta__container-slide-dots')
        });
    }
})