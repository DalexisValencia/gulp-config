// jQuery(document).ready(function() {
$(document).ready(function() {
        var playVideo = $(".abi--doblemalta-wrapper-generation__wrapper-video button.video-play");
        if (playVideo.length) {
            playVideo.on("click", function() {
                var iframe = $(this).siblings('iframe');
                var thumbnail = $(this).siblings('.abi--doblemalta-wrapper-generation__video-thumbnail');
                thumbnail.addClass('active');
                if (iframe.length >= 1) {
                    var url = iframe.attr("src") + "?autoplay=1";
                    iframe.attr("src", url);
                }
            })
        }
    })
    // })(jQuery);