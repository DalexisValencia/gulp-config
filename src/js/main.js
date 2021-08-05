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
                $("body").removeClass("no-scroll");
                iconChild.removeClass(closeClassName).addClass("icon-burger-menu");
            }
        });

        $(".abi--main-bannervideo--play-btn").on("click", function() {
            var iframe = $(".abi--main-bannervideo--video").find("iframe");
            var autoplay = iframe.attr("src") + "?autoplay=true";
            iframe.attr("src", autoplay);
            $(".abi--main-bannervideo--video").addClass("active")
        });
        // $(".close-drawer").on("click", function() {
        //     drawer.removeClass('active');
        // });
        // Sliders social network on new pilsen extra

        const openForm = $(".register-now");
        const closeForm = $(".abi--overlay-register--form-close");

        openForm.click(function() {
            $(".abi--overlay-register").addClass("active");
            $("body").addClass("no-scroll");
        });

        closeForm.click(function() {
            $(".abi--overlay-register").removeClass("active");
            $("body").removeClass("no-scroll");
        });

    })
    // })(jQuery);