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
    var slidersGenreation = $("#generationThatBrokeSliders.owl-carousel");
    if (slidersGenreation.length >= 1) {
        // createSlider(4)

        // function createSlider(sliders) {
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
            // dotsContainer: '.questionnaire--navigation',
            // nav: false,
            // mouseDrag: false,
            // touchDrag: false,
            // autoheight: true,
        });
        //}

        $(".play-gallery-video").on("click", function(event) {
            const posX = event.pageX;
            const videoWrapper = $(".abi--doblemalta-wrapper-generationThatBroke--video");
            const url = $(this).attr("attr-video");
            console.error(url)
            if (url) {
                videoWrapper.css({ "left": posX + "px", "opacity": "1" });
                videoWrapper.addClass("start-animation");
                setTimeout(() => {
                    videoWrapper.addClass("show-video-animation").css({ "left": "0px" }).removeClass("start-animation");
                    setTimeout(() => {
                        $('<iframe>') // Creates the element
                            .attr('src', url) // Sets the attribute spry:region="myDs"
                            .attr('allow', 'autoplay')
                            .appendTo('.abi--doblemalta-wrapper-generationThatBroke--video');
                    }, 150);
                }, 400);
            }
        })
    }
})