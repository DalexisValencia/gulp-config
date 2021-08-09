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
function createRipple(event, elem) {
    const current_color = $(event.currentTarget).css("background-color");
    // const match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(current_color);
    // const rippleBackground = "rgba(" + [match[1], match[2], match[3], 0.8].join(',') + ")";
    // const button = event.currentTarget;
    const button = elem;
    const circle = document.createElement("span");
    // const circle = $("<span></span>");

    const diameter = Math.max(button.innerWidth(), button.innerHeight());
    const radius = diameter / 2;
    circle.style.width = circle.style.height = diameter + "px";
    circle.style.left = event.clientX - button.offsetLeft - radius + "px";
    circle.style.top = event.clientY - button.offsetTop - radius + "px";
    // circle.style.backgroundColor = rippleBackground;
    circle.classList.add("ripple");

    // const ripple = button.getElementsByClassName("ripple")[0];
    const ripple = elem.hasClass("ripple");

    if (ripple) {
        ripple.remove();
    }
    if (button.find(".ripple").length) {
        button.find(".ripple").remove();
    }

    console.warn(button)

    // console.warn(button.find(".ripple").length, 'child')

    button.append(circle);
}

$(".el-custom--button").on("click", function(event) {
    createRipple(event, $(this));
});