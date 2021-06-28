$(document).ready(function() {
    const history_slider = $(".el-custom--history-page");
    // const slider = $('.el-custom--history-page__slider');
    if (history_slider.length) { // solo se ejecuta en la pagina de la historia
        AOS.init({
            once: false,
            mirror: true
        });
        const totals = $('.el-custom--history-page__slide').length - 1;
        $('.el-custom--history-page__slide').each(function(index) {
            const _me = $(this);
            console.info(totals, 'totals')
            console.warn(index, 'index')
            if (index == (totals-1)) {
                $(this).css("border", "3px solid black")
            }
            var waypoint = new Waypoint({
                element: document.getElementById($(this).attr('id')),
                handler: function() {
                    const parentActiveSlide = _me;
                    const activeID = parentActiveSlide.attr("id");
                    $(".el-custom--history-page__slider-navigation ul li").removeClass('slick-active');

                    $(".el-custom--history-page__slider-navigation ul li a").each(function() {
                        if ($(this).attr('href') == '#' + activeID) {
                            $(this).parent().addClass('slick-active');
                        }
                    });
                },
                offset: index == (totals-1) ? 200 : index == totals ? 300 : 0,
                // offset: index == 0 || totals == index ? 0 : -400,
            })
        });

        function createHistoryDots() {
            var sliders = $('.el-custom--history-page__slider .el-custom--history-page__slide');
            var dostMenu = $(".el-custom--history-page__slider-navigation ul.slick-dots");
            $(".el-custom--history-page__slider-navigation").append('<button class="slider-nav-right hide"></button>')
            for (let index = 0; index < sliders.length; index++) {
                const currentSlide = $(sliders[index]);
                const slideName = currentSlide.attr('data-attr-history-name');
                const slideUrl = currentSlide.attr('id');
                const active = ''; //  index == 0 ? 'slick-active' : '';

                dostMenu.append("<li class='" + active + "'><a class='dot' href='#" + slideUrl + "'>" + slideName + "</a></li>");
            }
        }
        createHistoryDots();
        $('.el-custom--history-page__slider-navigation ul.slick-dots li a').on('click', function() {
            setTimeout(() => {
                console.info($(document).scrollTop($(document).scrollTop() - 5))
            }, 750);
        });
        $('.el-custom--history-page__slider-navigation button').bind('click', function() {
            const showClass = $(this).hasClass('show');
            if (showClass) {
                $(this).removeClass('show').addClass('hide');
                $(".el-custom--history-page__slider-navigation ul.slick-dots").removeClass('show-transform').addClass('hide-transform');
            } else {
                $(this).removeClass('hide').addClass('show');
                $(".el-custom--history-page__slider-navigation ul.slick-dots").removeClass('hide-transform').addClass('show-transform');
            }
        });
    }
});