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
        //social slider
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

        //move mountains on scroll
        var lastScrollTop = 0;
        const middleMountains = $(".abi-main--home-wrapper--middle-mountains-scroll");
        const bottomMountains = $(".abi-main--home-wrapper--bottom-mountains-scroll");
        if (middleMountains.length && bottomMountains.length) {
            $(window).on("scroll", function() {
                var scrollDirection = $(this).scrollTop();
                var positionBeforeChangeOnMiddle = 0;
                var positionBeforeChangeOnBottom = 0;
                var width = $(window).width();

                var scrollDirection = $(this).scrollTop();
                if (width > 599) {
                    if (scrollDirection > lastScrollTop) {
                        // downscroll code
                        if (width >= 1280) {
                            positionBeforeChangeOnBottom = createNewPosition(bottomMountains.css("background-position-x"), "plus", 3);
                            positionBeforeChangeOnMiddle = createNewPosition(middleMountains.css("background-position-x"), "plus", 10);
                        } else if (width < 1280) {
                            positionBeforeChangeOnBottom = createNewPosition(bottomMountains.css("background-position-x"), "plus", 3);
                            positionBeforeChangeOnMiddle = createNewPosition(middleMountains.css("background-position-x"), "minus", 10);
                        }
                    } else {
                        // upscroll code
                        if (width >= 1280) {
                            positionBeforeChangeOnBottom = createNewPosition(bottomMountains.css("background-position-x"), "minus", 3);
                            positionBeforeChangeOnMiddle = createNewPosition(middleMountains.css("background-position-x"), "minus", 10);
                        } else if (width < 1280) {
                            positionBeforeChangeOnMiddle += createNewPosition(middleMountains.css("background-position-x"), "plus", 10);
                            positionBeforeChangeOnBottom = createNewPosition(bottomMountains.css("background-position-x"), "minus", 3);
                        }
                    }
                    lastScrollTop = scrollDirection;
                    middleMountains.css({
                        "background-position-x": positionBeforeChangeOnMiddle + "%",
                    })
                    bottomMountains.css({
                        "background-position-x": positionBeforeChangeOnBottom + "%",
                    })
                } else {
                    middleMountains.css({
                        "background-position-x": 0,
                    })
                    bottomMountains.css({
                        "background-position-x": "center",
                    })
                }
            })

            function createNewPosition(el, action, amount) {
                return action == "plus" ? parseInt(el.replace("%", "").replace("-", "")) + amount : parseInt(el.replace("%", "").replace("-", "")) - amount
            }
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

        //carousel brands
        const sliderBrands = $(".abi-main--ourcause-ourbrands--slider.owl-carousel");
        const sliderBrandsNav = $(".abi-main--ourcause-ourbrands--slider__navigation")
        if (sliderBrands.length >= 1) {
            sliderBrands.owlCarousel({
                items: 4,
                loop: true,
                video: true,
                responsive: {
                    0: {
                        items: 1,
                        margin: 20,
                        center: false,
                        navContainer: sliderBrandsNav
                    },
                    420: {
                        margin: 20,
                        items: 2,
                        navContainer: sliderBrandsNav
                    },
                    600: {
                        margin: 20,
                        items: 4,
                        navContainer: sliderBrandsNav
                    },
                    710: {
                        items: 6,
                        margin: 20,
                        navContainer: sliderBrandsNav
                    },
                    960: {
                        items: 6,
                        margin: 20,
                        loop: false,
                        navContainer: sliderBrandsNav
                    }
                }
            });
        }
    })
    // })(jQuery);