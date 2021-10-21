// jQuery(document).ready(function() {
$(document).ready(function() {
        //open an close drawer
        var drawer = $(".abi--main-navigation");
        $(".open-drawer").on("click", function() {
            $('body').addClass('no-scroll');
            drawer.addClass('active');
        });
        $(".close-drawer").on("click", function() {
            $('body').removeClass('no-scroll');
            drawer.removeClass('active');
        });
        //Singers sliders
        var slidersHome = $(".abi-main--home--section-gallery--singers__container--gallery.owl-carousel");
        var sliderHomeNavigation = $(".abi-main--home--section-gallery--singers__navigation");
        var sliderHomeDotsNavigation = $(".abi-main--home--section-gallery--singers__navigation--dots")
        if (slidersHome.length >= 1 && sliderHomeNavigation.length >= 1) {
            slidersHome.owlCarousel({
                items: 4,
                loop: true,
                video: true,
                responsive: {
                    // 0: {
                    //     items: 1,
                    //     margin: 10,
                    //     center: false,
                    //     nav: true,
                    //     navContainer: sliderHomeNavigation,
                    //     dotsContainer: sliderHomeDotsNavigation,
                    // },
                    0: {
                        margin: 10,
                        items: 2.5,
                        nav: true,
                        navContainer: sliderHomeNavigation,
                        dotsContainer: sliderHomeDotsNavigation,
                    },
                    600: {
                        margin: 10,
                        items: 2.5,
                        nav: true,
                        navContainer: sliderHomeNavigation,
                        dotsContainer: sliderHomeDotsNavigation,
                    },
                    710: {
                        items: 3,
                        margin: 10,
                        nav: true,
                        navContainer: sliderHomeNavigation,
                        dotsContainer: sliderHomeDotsNavigation,
                    },
                    960: {
                        items: 3,
                        margin: 50,
                        loop: true,
                        nav: true,
                        navContainer: sliderHomeNavigation,
                        dotsContainer: sliderHomeDotsNavigation,
                    }
                }
            });
        }

        //Singers sliders
        var slidersInterestU = $(".abi-main--home--section-interestyou__gallery.owl-carousel");
        var slidersInterestUDotsNavigation = $(".abi-main--home--section-interestyou__gallery__navigation--dots")
        if (slidersInterestU.length >= 1 && slidersInterestUDotsNavigation.length >= 1) {
            slidersInterestU.owlCarousel({
                items: 4,
                loop: true,
                video: true,
                responsive: {
                    0: {
                        margin: 10,
                        items: 1.5,
                        nav: false,
                        dotsContainer: slidersInterestUDotsNavigation,
                    },
                    600: {
                        margin: 10,
                        items: 2.5,
                        nav: false,
                        // navContainer: slidersInterestUDotsNavigation,
                        dotsContainer: slidersInterestUDotsNavigation,
                    },
                    710: {
                        items: 3,
                        margin: 10,
                        nav: false,
                        // navContainer: slidersInterestUDotsNavigation,
                        dotsContainer: slidersInterestUDotsNavigation,
                    },
                    960: {
                        items: 3,
                        margin: 50,
                        loop: true,
                        nav: false,
                        // navContainer: slidersInterestUDotsNavigation,
                        dotsContainer: slidersInterestUDotsNavigation,
                    }
                }
            });
        }


        var playButton = $(".el-custom--button.play-video");

        if (playButton.length) {
            playButton.on("click", function() {
                const image = playButton.siblings(".abi-main--ourcause-ours-section--video__img");
                const iframe = playButton.siblings(".abi-main--ourcause-ours-section--video__iframe");
                image.addClass('playing');
                iframe.addClass('playing');
                $(this).addClass('playing');
                iframe.attr("src", iframe.attr("src") + "?autoplay=true");
            })
        }
    })
    // })(jQuery);