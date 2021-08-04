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