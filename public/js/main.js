// jQuery(document).ready(function() {
$(document).ready(function() {
        var drawer = $(".abi--main-navigation");
        var closeClassName = "icon-pluss";
        $(".open-drawer").on("click", function(event) {
            // console.info(event.currentTarget);
            var iconChild = $(this).find('i');
            if (iconChild.hasClass("icon-burger-menu")) { //if exists burger menu class
                drawer.addClass("active");
                iconChild.removeClass("icon-burger-menu").addClass(closeClassName);
                $(this).addClass("now-im-close");
                $("body").addClass("no-scroll")
            } else if (iconChild.hasClass(closeClassName)) { //if exists close burger menu class
                drawer.removeClass('active');
                $(this).removeClass("now-im-close");
                $("body").removeClass("no-scroll")
                iconChild.removeClass(closeClassName).addClass("icon-burger-menu");
            }
        });
        // $(".close-drawer").on("click", function() {
        //     drawer.removeClass('active');
        // });
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
function createRipple(event) {
    const current_color = $(event.currentTarget).css("background-color");
    // const match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(current_color);
    // const rippleBackground = "rgba(" + [match[1], match[2], match[3], 0.8].join(',') + ")";
    const button = event.currentTarget;

    const circle = document.createElement("span");
    // const circle = $("<span></span>");

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = diameter + "px";
    circle.style.left = event.clientX - button.offsetLeft - radius + "px";
    circle.style.top = event.clientY - button.offsetTop - radius + "px";
    // circle.style.backgroundColor = rippleBackground;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

$(".el-custom--button").on("click", function(event) {
    createRipple(event);
});