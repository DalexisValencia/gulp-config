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
    var playVideo = $(".abi--doblemalta-wrapper-generation__wrapper-video button.video-play");
    if (playVideo.length) {
        playVideo.on("click", function() {
            var iframe = $(this).siblings('iframe');
            var thumbnail = $(this).siblings('.abi--doblemalta-wrapper-generation__video-thumbnail');

            // $("#video")[0].src += "&autoplay=1";
            thumbnail.addClass('active');
            if (iframe.length >= 1) {
                var url = iframe.attr("src") + "?autoplay=1";
                iframe.attr("src", url);
                // iframe.attr('data-play', 0);
            }
        })
    }
    var sliderProduct = $(".abi--doblemalta-wrapper-newproduct__gallery.owl-carousel");

    if (sliderProduct.length >= 1) {
        sliderProduct.owlCarousel({
            items: 1,
            loop: true,
        });

        $('.abi--doblemalta-wrapper-newproduct__lateral-menu li').on("click", function() {
            const index = $(this).index();
            sliderProduct.trigger('to.owl.carousel', index);
            $('.abi--doblemalta-wrapper-newproduct__lateral-menu li').removeClass('active');
            $(this).addClass('active');
        })
    }

    var slidersGenreation = $("#generationThatBrokeSliders.owl-carousel");
    if (slidersGenreation.length >= 1) {
        var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
        console.warn(isiPad, 'isiPad')

        if (isiPad > -1) {
            slidersGenreation.owlCarousel({
                items: 2,
                loop: true,
            });
        } else {
            slidersGenreation.owlCarousel({
                items: 4,
                loop: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    691: {
                        items: 4,
                    }
                }
            });
        }

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
})