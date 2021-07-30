// jQuery(document).ready(function() {
$(document).ready(function() {
        var drawer = $(".abi--main-navigation");
        $(".open-drawer").on("click", function() {
            drawer.addClass('active');
        });
        $(".close-drawer").on("click", function() {
            drawer.removeClass('active');
        });
        // Sliders social network on new pilsen extra
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
        // Sliders main Home
        var slidersGenreation = $(".abi--main-sliders.owl-carousel");
        if (slidersGenreation.length >= 1) {
            // var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");

            slidersGenreation.owlCarousel({
                items: 1,
                loop: true,
                navContainer: $(".abi--main-sliders-navigation"),
                dotsContainer: $(".abi--main-sliders-dots")
            });

            // Sliders social network on home
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
    // })(jQuery);