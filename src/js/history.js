$(document).ready(function() {
    const history_slider = $(".el-custom--history-page");
    const slider = $('.el-custom--history-page__slider');
    console.error(history_slider.length, 'history_slider.length')
    if (history_slider.length) {
        function createHistoryDots() {
            console.info("askjdklasjdl")
            var sliders = $('.el-custom--history-page__slider .el-custom--history-page__slide');
            for (let index = 0; index < sliders.length; index++) {
                const currentSlide = $(sliders[index]);
                const slideName = currentSlide.attr('data-attr-history-name');
                const slideUrl = currentSlide.attr('id');
                const active = index == 0 ? 'slick-active' : '';
                $(".el-custom--history-page__slider-navigation ul.slick-dots").append(
                    "<li class='" + active + "'><a class='dot' href='#" + slideUrl + "'>" + slideName + "</a></li>"
                );
            }
        }

        createHistoryDots();
    }

    // $(window).on("scroll", function(){
    // const header = $(".el-custom--header");
    // const bannerHistory = $('header.el-custom--history-page__header');
    // const startScroll = header.innerHeight() + bannerHistory.innerHeight();
    // const scrollInfo = window.scrollY;
    // console.info(startScroll, 'startScroll');
    // // if (startScroll > scrollInfo) {
    //     $(".el-custom--history-page__slider .el-custom--history-page__slide").each(function(){
    //         const element = $(this);
    //         const innerHeightElement = element.innerHeight();
    //         console.log(innerHeightElement, 'innerHeightElement')
    //         // if(scrollInfo < innerHeightElement){
    //         //     element.css("border", "10px solid magenta");
    //         // }
    //     });
    // // }
    // console.error(window.scrollY);
    // checkingScroll();
    // });

    // function checkingScroll(){
    // const element = $('#slide3');

    // const footer = $(".el-custom--footer");
    // const totalElementScrollWithElements = (element.innerHeight() * 2) + (header.innerHeight() + footer.innerHeight())
    // console.info(totalElementScrollWithElements, 'other')
    // console.warn(element.innerHeight() * 2);
    // var top_of_element = slideTest.offset().top;
    // var bottom_of_element = slideTest.offset().top + slideTest.outerHeight();
    // var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    // var top_of_screen = $(window).scrollTop();

    // if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    //     console.error('isVisible');
    // } else {
    //     // the element is not visible, do something else
    // }
    // } 
    // $('.el-custom--history-page__slider-navigation ul.slick-dots li').on('click', function(){
    //     $('.el-custom--history-page__slider-navigation ul.slick-dots li').removeClass('slick-active');
    //     $(this).addClass('slick-active');

    // });
    // $('.el-custom--history-page__slider').slick({
    //     initialSlide: 0,
    //     rows: 0,
    //     autoplay: false,
    //     arrows: false,
    //     dots: true,
    //     customPaging: function(slider, i) {
    //         const index = i;
    //         var sliders = $('.el-custom--history-page__slider .el-custom--history-page__slide')[index];
    //         var slideName = $(sliders).attr('data-attr-history-name')
    //         return '<span class="dot">'+slideName+'</span>';
    //       },
    //     slidesToShow: 1,
    //     draggable: true,
    //     infinite: false,
    //     vertical: true,
    //     speed: 1000,
    //     useTransform: true,
    //     cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    // });
    // //scroll
    // slider.on('wheel', (function(e) {
    //     e.preventDefault();
    //     if (e.originalEvent.deltaY < 0) {
    //       $(this).slick('slickNext');
    //     } else {
    //       $(this).slick('slickPrev');
    //     }
    // }));
});