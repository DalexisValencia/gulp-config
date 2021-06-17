$(document).ready(function() {
    const home = $(".el-custom--home-page");
    const leftBottle = $(".el-custom--home-page-container.el-left").find('.el-custom-home-page-cristal-img');
    const rightBottle = $(".el-custom--home-page-container.el-right").find('.el-custom-home-page-cristal-img');
    var windowWidth = $(window).width();

    if (home.length) {
        if (windowWidth > 600) {
            $(".el-custom--home-page-container").click(function() {
                const valueToReduce = Math.abs(windowWidth > 900 ? 235 : 160);
                const translateByBottle = (windowWidth / 2) - valueToReduce;
                const selectedScreen = $(this).hasClass('el-left')
                changeTemplate(selectedScreen);
                leftBottle.css({
                    "margin-left": translateByBottle + "px",
                });
                rightBottle.css({
                    "margin-left": "-" + translateByBottle + "px",
                })
                setTimeout(() => {
                    leftBottle.addClass('cheers-left-animation');
                    rightBottle.addClass('cheers-right-animation');
                    setTimeout(() => {
                        home.addClass('open-doors');
                        setTimeout(() => {
                            // console.log(selectedScreen ? 'ir a cristal' : 'ir a bicolor')
                            window.location.href = selectedScreen ? "/Cristal" : "/cristal-bicolor";
                        }, 2000);
                    }, 1000);
                }, 500);
            });
        } else if (windowWidth < 600) {
            $(".el-custom--home-page-container").click(function() {
                window.location.href = "/cristal-bicolor";
            });
        }

        $(window).resize(function() {
            windowWidth = $(window).width();
        });
    }

    function changeTemplate(selectedScreen) {
        const selectedPage = selectedScreen ? 'cristal' : 'bicolor';
        const removePage = !selectedScreen ? 'cristal' : 'bicolor';
        const siteUrl = location.origin;
        const assetsUrl = '/sites/g/files/yrakuj5000266test/themes/site/cristal_pet/';
        const completeurl = siteUrl + assetsUrl;
        // add page clases cristal or bicolor
        $('.el-custom--header').removeClass(removePage).addClass(selectedPage);
        $('.el-custom--home-page').removeClass(removePage).addClass(selectedPage);
        $('.el-custom--footer').removeClass(removePage).addClass(selectedPage);

        //change logo images 
        $('img.relative-logo').each(function() {
            $(this).attr('src', completeurl + 'assets/logo-' + selectedPage + '.png').attr('alt', 'ejemplo');
        });

        //change register btn
        $('.el-custom--buttons-transform a.el-custom--button:not(.backusYa)').attr('href', selectedScreen ? '/registro' : '/registro-bicolor');
    }

    function findCristal() {
        const bodyCristal = $("body").attr("class"); // clase1 clase2 clase clase
        const availableClass = ['ab-cristal-core-homecristal', 'ab-cristal-core-cristal', 'ab-cristal-core-historia', 'cervezacristal-pageAzul']
        const isCristal = bodyCristal ? availableClass.indexOf(bodyCristal) != -1 : false
            // console.warn('is cristal', isCristal);
            // console.error(availableClass.indexOf(bodyCristal), 'availableClass.indexOf(bodyCristal) ')
        changeTemplate(isCristal)
    }
    findCristal();
});