$( document ).ready(function() {
    console.log( "ready!" );
    $('.el-custom--banners-slides').slick({
        dots: true,
        appendDots: $('.el-custom--banners-dots'),
        arrows: false,
        autoplay: true,
    });
    $('.el-custom--flavors-card').slick({
        slidesToShow: 4,
        dots: true,
        appendDots: $('.no-one'),
        arrows: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2.5,
                    slidesPerRow: 2.5,
                    swipe: true,
                    infinite: false,
                    // adaptiveHeight: true,
                }
            }
        ]
   });
//    $(window).resize(function() {
//        console.error($( window ).width(), '$( window ).width()')
//    })
//    $('.el-custom--flavors-card').slick({
//         dots: false,
//         appendDots: $('.no-e'),
//         arrows: false,
//         infinite: false,
//         speed: 300,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//           // You can unslick at a given breakpoint now by adding:
//           // settings: "unslick"
//           // instead of a settings object
//         ]
//       });
});