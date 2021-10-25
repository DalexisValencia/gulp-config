// jQuery(document).ready(function() {
$(document).ready(function() {
        var isPageVideo = jQuery(".abi--clubcolombia-iframe-banner");
        var lastScroll;
        if (isPageVideo.length >= 1) {
            jQuery(window).on("scroll", function() {
                var header = jQuery("header.header");
                var currentScroll = jQuery(window).scrollTop();
                // console.info(currentScroll, 'currentScroll');

                // console.error(currentScroll > 0 && !header.hasClass("hiddeScroll"))

                if (currentScroll > 0 && !header.hasClass("hiddeScroll")) {
                    // console.log("dentro")
                    header.addClass("hiddeScroll");
                    return;
                }

                if (currentScroll <= 0 && header.hasClass("hiddeScroll")) {
                    header.removeClass("hiddeScroll");
                    return;
                }

                // if (currentScroll > lastScroll && header.hasClass("hiddeScroll")) {
                //     header.removeClass("hiddeScroll");
                // }

                lastScroll = currentScroll;
                console.info(currentScroll, 'currentScroll')
                console.info(lastScroll, 'lastScroll')
            });
        }
        var slidersGenreation = $(".abi--clubcolombia-flavor-travel__products.owl-carousel");
        if (slidersGenreation.length >= 1) {
            slidersGenreation.owlCarousel({
                items: 4,
                autoplay: true,
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
                        marging: 10,
                        navContainer: $(".abi--clubcolombia-flavor-travel__carousel-nav")
                    },
                    760: {
                        items: 3,
                        marging: 10,
                        navContainer: $(".abi--clubcolombia-flavor-travel__carousel-nav")
                    },
                    960: {
                        items: 4,
                        marging: 10,
                        navContainer: $(".abi--clubcolombia-flavor-travel__carousel-nav")
                    }
                }
            });
        }
    })
    // })(jQuery);