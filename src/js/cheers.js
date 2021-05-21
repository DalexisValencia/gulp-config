$(document).ready(function(){
    const home = $(".el-custom--home-page");
    const leftBottle = $(".el-custom--home-page-container.el-left").find('.el-custom-home-page-cristal-img');
    const rightBottle = $(".el-custom--home-page-container.el-right").find('.el-custom-home-page-cristal-img');
    const windowWidth = $(window).width();
    const translateByBottle = (windowWidth / 2) - 235;
    
    if(home.length) {
        if (windowWidth > 600) {
            $(".el-custom--home-page-container").click(function(){
             leftBottle.css({
                 "transform": "rotate(45deg)",
                 "margin-left": translateByBottle+"px",
             });
             rightBottle.css({
                 "transform": "rotate(-45deg)",
                 "margin-left": "-"+translateByBottle+"px",
             })
             setTimeout(() => {
                 home.addClass('open-doors');
             }, 800);
            });
        }
    }
});