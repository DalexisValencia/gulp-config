function createRipple(event) {
    const current_color = $(event.currentTarget).css("background-color");
    const match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(current_color);
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

$("button.el-custom--button").on("click", function(event) {
    createRipple(event);
});
// const buttons = document.getElementsByTagName("button");
// for (const button of buttons) {
//     button.addEventListener("click", createRipple);
// }