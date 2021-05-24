$(document).ready(function() {
    $('.burger-menu').click(function() {
        $('.el-custom--main-menu').addClass('active');
    })
    $('.close-mobile-menu').click(function() {
        $('.el-custom--main-menu').removeClass('active');
    })

    $(window).resize(function() {
        if ($(window).width() > 900) {
            $('.el-custom--main-menu').removeClass('active')
        }
    })
})
$(document).ready(function(){
    const home = $(".el-custom--home-page");
    const leftBottle = $(".el-custom--home-page-container.el-left").find('.el-custom-home-page-cristal-img');
    const rightBottle = $(".el-custom--home-page-container.el-right").find('.el-custom-home-page-cristal-img');
    const windowWidth = $(window).width();
    
    if(home.length) {
        if (windowWidth > 600) {
            $(".el-custom--home-page-container").click(function(){
            const translateByBottle = (windowWidth / 2) - 235;
             leftBottle.css({
                 // "transform": "rotate(45deg)",
                 "margin-left": translateByBottle+"px",
             });
             rightBottle.css({
                 // "transform": "rotate(-45deg)",
                 "margin-left": "-"+translateByBottle+"px",
             })
             setTimeout(() => {
                leftBottle.addClass('cheers-left-animation');
                rightBottle.addClass('cheers-right-animation');
                setTimeout(() => {
                    home.addClass('open-doors');
                }, 1000);
             }, 500);
            });
        }
    }
});
$(document).ready(function(){
    const slider = $('.el-custom--history-page__slider');
    function createHistoryDots(){
        var sliders = $('.el-custom--history-page__slider .el-custom--history-page__slide');
        for (let index = 0; index < sliders.length; index++) {
            const currentSlide = $(sliders[index]);
            const slideName = currentSlide.attr('data-attr-history-name');
            const slideUrl = currentSlide.attr('id');
            const active = index == 0 ? 'slick-active' : '';
            $(".el-custom--history-page__slider-navigation ul.slick-dots").append(
                "<li class='"+active+"'><a class='dot' href='#"+slideUrl+"'>"+slideName+"</a></li>"
            );
        }
    }

    createHistoryDots();

    $(window).on("scroll", function(){
        console.error(window.scrollY);
        checkingScroll();
    });

    function checkingScroll(){
        const slideTest = $('#slide3');
        var top_of_element = slideTest.offset().top;
        var bottom_of_element = slideTest.offset().top + slideTest.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            console.error('isVisible');
        } else {
            // the element is not visible, do something else
        }
    } 
    $('.el-custom--history-page__slider-navigation ul.slick-dots li').on('click', function(){
        $('.el-custom--history-page__slider-navigation ul.slick-dots li').removeClass('slick-active');
        $(this).addClass('slick-active');
       
    });
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

$(document).ready(function() {
    var modal = $("#modalRegister");
    console.error('función del modal agregada');
    if(modal.length){
        var btn = $("#openModal");
        var span = $(".close");

        btn.click(function() {
            modal.css("display", "block");
            $("body").addClass("no-overflow");
            window.scrollTo(0, 0);
        });

        span.click(function() {
            modal.css("display", "none");
            $("body").removeClass("no-overflow");
    });
    }
});

// (function ($, Drupal) {

//     //Se agrega el checkmark desde js
//     $("label[for='edit-tyc']").prepend('<span class="checkmark"></span>');
//     $("label[for='edit-marketing']").prepend('<span class="checkmark"></span>');
 
//    $('form').validate({
//      ignore: [],
//      rules: {
//        "first_name": {
//          required: true,
//          spanish_words: true,
//        },
//        "last_name": {
//          required: true,
//          spanish_words: true,
//        },
//        "email": {
//          required: true,
//          email: true,
//          emailname: true,
//          email_exists: true,
//          emailDomainRestriction: true,
//        },
//        "phone": {
//          required: true,
//          phone_exists: true,
//          maxlength: 9,
//          //rangelength: [9,9],
          
//        },
//        "gender": {
//          required: true,
//          //validatemyselect: true,
//        },
//        "month": {
//          required: true,
//        },
//        "day": {
//          required: true,
//        },
//        "year": {
//          required: true,
//          agecheck: true,
//          validdate: true,
//        },
//        "city": {
//          required: true,
//        },
//        "DNI": {
//          required: true,
//          dni_exists: true,
//          //maxlength: 11, 
//          //minlength: 8,
//          rangelength: [8,11],
//        },
//        "tyc": {
//          required: true,
//        }
//      },
 
//      messages: {
//          "first_name": {
//            required: "Nombre inválido, debes ingresar un nombre válido",
//          },
//          "last_name": {
//            required: "Apellido inválido, debes ingresar un apellido válido",
//          },
//          "email": {
//            required: "Dirección de correo electrónico no válida",
//            email: "Dirección de correo electrónico no válida",
//            email_exists: "La dirección de correo que ingresaste ya fue registrada",
//          },
//          "phone": {
//            required: "Debes ingresar tu número de teléfono",
//            maxlength: "Maximo 9 Caracteres ",
//            //rangelength: "Debe ingresar 9 Caracteres",
//          },
//          "gender": {
//            required: "Debes seleccionar tu género",
//          },
//          "month": {
//            required: "Ingresar mes de nac",
//          },
//          "day": {
//            required: "Ingresar día de nac",
//          },
//          "year": {
//            required: "Ingresar año de nac",
//          },   
//          "DNI": {
//            required: "Debes ingresar un DNI/carnet extranjería válido",
//            maxlength: "Maximo 11 Caracteres",
//            minlength: "Minimo 8 Caracteres",
//            rangelength: "Debe ingresar Un nuemero entre 8 y 11 caracteres",
//          },
//          "city": {
//            required: "Debes seleccionar ciudad de residencia",
//          },
//          "tyc": {
//            required: "Debes aceptar términos y condiciones para continuar",
//          },
//          "question1": {
//            required: "Debes seleccionar una respuesta",
//          },
//          "question2": {
//            required: "Debes seleccionar una respuesta",
//          }
//        },
 
//       /* errorPlacement: function(error, element) {
//          if (element.is('gender:hidden')) {
//              error.insertAfter(element.next('.nice-select'));
//          } else {
//              error.insertAfter(element);
//          }
//      }*/
              
//    });
 
//  }) (jQuery, Drupal);
$(document).ready(function() {
    $('select').niceSelect();
});

$(document).ready(function() {
    $('.el-custom--banners-slides').slick({
        dots: true,
        appendDots: $('.el-custom--banners-dots'),
        arrows: true,
        appendArrows: $('.el-custom--banners-arrows'),
        autoplay: false,
        responsive: [{
            breakpoint: 900,
            settings: {
                dots: true,
                arrows: true,
                // appendArrows: $('.el-custom--banners-dots'),
            }
        }]
    });
    // $('#el-custom--flavors__big-slide').slick({
    //     slidesToShow: 3,
    //     dots: false,
    //     // appendDots: $('.no-one'),
    //     arrows: true,
    //     autoplay: false,
    //     responsive: [{
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2.35,
    //             slidesPerRow: 2.35,
    //             swipe: true,
    //             infinite: false,
    //             arrows: false,
    //         }
    //     }]
    // });
    // //prueba:
    
    // $('#el-custom--flavors-page__sliders').slick({
    //     dots: true,
    //     appendDots: $('.el-custom--flavors-slider--navigation'),
    //     arrows: false,
    //     autoplay: false,
    //     responsive: [{
    //         breakpoint: 900,
    //         settings: {
    //             dots: false,
    //             swipe: true,
    //             infinite: true,
    //             arrows: true,
    //             appendArrows: $('.el-custom--flavors-slider--navigation'),
    //         }
    //     }]
    // }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    //     console.log(nextSlide, 'pilas');
    //     $("header.el-custom--flavors-page__slider-navigation").attr('class', 'el-custom--flavors-page__slider-navigation');
    //     $("header.el-custom--flavors-page__slider-navigation").addClass('header-' + nextSlide)

    //     $("#el-custom--flavors-page__sliders").removeClass().addClass('slick-initialized slick-slider bg-' + nextSlide)
    //     $('.el-custom-flavors-page').removeClass().addClass('el-custom-flavors-page color-' + nextSlide);
    // });

    // var pathname = window.location.pathname;

    // if(pathname.indexOf('sabores') != -1) {
    //     var findIndex = pathname.split("/")[2];
    //     console.error(findIndex, 'indes');
    //     if(findIndex != null){
    //         console.info('ahora vamos')
    //         // $('#el-custom--flavors-page__sliders').slick('slickGoTo', 3);
    //     }
    // }
});
$(document).ready(function() {
    const bannerProducts = $(".el-custom--products-slide");
    if (bannerProducts.length) {
        bannerProducts.slick({
            focusOnSelect: true,
            lazyLoad: 'ondemand',
            centerMode: true,
            slidesToShow: 4.99,
            dots: false,
            arrows: true,
            adaptiveHeight: true,
            appendArrows: $(".el-custom--products-arrows"),
            autoplay: false,
            infinite: true,
            speed: 400,
            responsive: [
                {
                    breakpoint: 740,
                    settings: {
                        slidesToShow: 3,
                        slidesPerRow: 4,
                        adaptiveHeight: true,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 1.78,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        variableWidth: false,
                        slidesToShow: 1.9,
                }
                },
            ]
        })
        .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            addClassToDetails();
            $(".el-custom--details").removeClass('reload');
        })
        .on('afterChange', function(event, slick, currentSlide, nextSlide) {
            hidethirdInactive();
            addClassToDetails();
        });
        

        $("div.products--card").click(function(){
            const index = $(this).attr('data-attr-index');
            bannerProducts.slick('slickGoTo', index -1);
            hidethirdInactive();
            addClassToDetails();
        });

        function hidethirdInactive() {
            const realWidth = jQuery( window ).width();
            $("div.products--card").removeClass('no-visible');
            if(realWidth > 600) {
                $("div.products--card.slick-slide.slick-current.slick-active.slick-center").prev().prev().prev().addClass('no-visible');
                $("div.products--card.slick-slide.slick-current.slick-active.slick-center").next().next().next().addClass('no-visible');
            }
            else if (realWidth < 600) {
                $("div.products--card.slick-slide.slick-current.slick-active.slick-center").prev().addClass('no-visible');
                $("div.products--card.slick-slide.slick-current.slick-active.slick-center").next().addClass('no-visible');
            }
        }

        function addClassToDetails () {
            setTimeout(() => {
                $(".el-custom--details").addClass('reload');
            }, 500);
        }

        hidethirdInactive();
        addClassToDetails();
    }

    $(window).resize(function(){
        hidethirdInactive();
    });
});