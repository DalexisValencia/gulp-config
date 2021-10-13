// jQuery(document).ready(function() {
$(document).ready(function() {
        var slidersHome = $(".abi-main--gallery-videos"); // .owl-carousel
        $(window).resize(function() {
            checkSize();
        });

        function checkSize() {
            var width = $(window).width();
            if (width > 690) {
                slidersHome.owlCarousel('destroy');
                slidersHome.removeClass('owl-carousel');
            } else if (width < 690) {
                createSlider();
                slidersHome.addClass('owl-carousel');
            }
        }

        function createSlider() {
            if (slidersHome.length >= 1) {
                slidersHome.owlCarousel({
                    items: 4,
                    loop: true,
                    video: true,
                    responsive: {
                        0: {
                            items: 2.5,
                            // center: false,
                            dotsContainer: $(".abi-main--gallery-videos--owl-dots")
                        },
                        420: {
                            // margin: 2.5,
                            items: 2.5,
                            dotsContainer: $(".abi-main--gallery-videos--owl-dots")
                        },
                        600: {
                            items: 2.5,
                            dotsContainer: $(".abi-main--gallery-videos--owl-dots")
                        },
                    }
                });
            }
        }

        var PlayBigVideo = $(".abi-main--big-video-iframe .abi-main--big-video-picture .el-custom--button.play-video");

        if (PlayBigVideo.length) {
            PlayBigVideo.on("click", function() {
                console.error("fuck!!")
                const attr_video = $(this).attr("data-attr-src");
                play_big_video(attr_video, true, undefined);
            })
        }

        $(".abi-main--gallery-videos--item--iframe .abi-main--gallery-video-picture .el-custom--button.play-video").click(function() {
            const attr_video = $(this).attr("data-attr-src");
            const parent_data = $(this).parent(".abi-main--gallery-video-picture").siblings(".abi-main--gallery-videos--item--description");
            const title = parent_data.find(".abi-main--gallery-videos--item--description--title").text();
            const author = parent_data.find(".abi-main--gallery-videos--item--description--character").text();
            play_big_video(attr_video, true, { title: title, author: author });
        });

        function play_big_video(url, autoplay, data) {
            const video = $("#big-video-iframe");
            var description = video.parent(".abi-main--big-video-iframe").siblings(".abi-main--big-video-description");
            const url_video = autoplay ? url + "?autoplay=true" : url + "";

            if (data != undefined) {
                description.find(".abi-main--big-video-description--title").text(data.title);
                description.find(".abi-main--big-video-description--character").text(data.author);
            }
            description.css("display", "none"); // ¿remove?
            video.attr("src", url_video);
            video.addClass('playing');
            video.siblings('abi-main--big-video-picture').addClass('playing');
        }

        checkSize();
    })
    // })(jQuery);