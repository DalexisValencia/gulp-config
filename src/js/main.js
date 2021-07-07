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
    console.info("h1111")
    var playVideo = $(".abi--doblemalta-wrapper-generation__wrapper-video button.video-play");
    console.info("hey")
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
})