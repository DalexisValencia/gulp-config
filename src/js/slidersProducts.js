$(document).ready(function() {
    const bannerProducts = $(".el-custom--products-slide");
    const totalProducts = $(".products--card");
    $(".el-custom--products-slide").css("max-width", (totalProducts.length * 300) + 'px');
    if (bannerProducts.length) {
        // bannerProducts.slick({
        //     focusOnSelect: true,
        //     lazyLoad: 'ondemand',
        //     centerMode: true,
        //     // slidesToShow: 4.99,
        //     slidesToShow: totalProducts.length > 5 ? 5 : totalProducts.length,
        //     dots: false,
        //     arrows: true,
        //     adaptiveHeight: true,
        //     appendArrows: $(".el-custom--products-arrows"),
        //     autoplay: false,
        //     infinite: true,
        //     speed: 400,
        //     responsive: [
        //         {
        //             breakpoint: 740,
        //             settings: {
        //                 slidesToShow: 3,
        //             },
        //         },
        //         {
        //             breakpoint: 600,
        //             settings: {
        //                 slidesToShow: 1.73,
        //             }
        //         },
        //         {
        //             breakpoint: 400,
        //             settings: {
        //                 slidesToShow: 1.75,
        //             }
        //        },
        //        {
        //             breakpoint: 350,
        //             settings: {
        //                 slidesToShow: 1.88,
        //             }
        //         },
        //        {
        //             breakpoint: 300,
        //             settings: {
        //                 slidesToShow: 1.93,
        //             }
        //         },
        //     ]
        // })
        // .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        //     addClassToDetails();
        //     $(".el-custom--details").removeClass('reload');
        // })
        // .on('afterChange', function(event, slick, currentSlide, nextSlide) {
        //     setTimeout(function(){
        //         moveMarker()
        //         addClassToDetails();
        //     }, 500);
        //     hidethirdInactive();
        //     markerPreviousAndNextProducts ();
        // });
        

        // $("div.products--card").click(function(){
        //     const index = $(this).attr('data-attr-index');
        //     hidethirdInactive();
        //     addClassToDetails();
        // });

        function markerPreviousAndNextProducts () {
            const currentWidth = $(window).width();
            const productActive = $("div.products--card.slick-center.slick-current");
            if(currentWidth < 600){
                $("div.products--card").removeClass('siblings-active').removeClass('prev').removeClass('next');
                productActive.prev('div.products--card').addClass('siblings-active').addClass('prev');
                productActive.next('div.products--card').addClass('siblings-active').addClass('next');
            }
        }

        function moveMarker() {
            const currentWidth = $(window).width();
            const productActive = $("div.products--card.slick-center.slick-current");
            const markerIndicator = $(".el-custom--details .details--marker");
            // console.error(productActive.find('.products--card__description').height() / 2);
            if(currentWidth > 600) {
                //  + productActive.find('.products--card__description').height() / 2.2
                // console.log(currentWidth, 'currentWidth');
                // productActive.css("border", "1px dashed black")
                // markerIndicator.css("left", (productActive.offset().left +( productActive.find('.products--card__description').height() / 2))+ "px");
            } else if (currentWidth < 600) {
                markerIndicator.css("left", 'unset');
            }
        }

        function hidethirdInactive() {
            console.info('here');
            const realWidth = jQuery( window ).width();
            // const activeCenterSlide = $("div.products--card.slick-slide.slick-current.slick-active.slick-center");
            const activeCenterSlide = $(".owl-item.active.center");//  .products--card.item
            $("div.products--card").removeClass('no-visible');
            if(realWidth > 600) {
                if (totalProducts.length > 5) {
                    activeCenterSlide.prev().prev().prev().addClass('no-visible');
                    activeCenterSlide.next().next().next().addClass('no-visible');
                    // console.warn(totalProducts.length, 'asjd')
                }
            }
            else if (realWidth < 600) {
                activeCenterSlide.prev().find(".products--card").addClass('no-visible');
                activeCenterSlide.next().find(".products--card").addClass('no-visible');
            }
        }

        function addClassToDetails () {
            setTimeout(() => {
                $(".el-custom--details").addClass('reload');
                addContentToDetail ()
            }, 700);
        }

        function addContentToDetail () {
            const activeSlide = $(".owl-item.active.center .products--card.item");
            
            // const activeSlide = $("div.products--card.slick-slide.slick-current.slick-center");
            const details_container = $(".el-custom--details");
            const attrIndex = activeSlide.attr("data-attr-index");
            const attrDescription = activeSlide.attr("data-attr-description");
            const attrImg = activeSlide.attr("data-attr-img");
            const attrImgAlt = activeSlide.attr("data-atrr-alt");
            const attTitle = activeSlide.attr("data-atrr-titulo");
            const attArray = activeSlide.attr("data-atrr-array");

            if (details_container.attr('data-container-parent') != attrIndex) {
                var parentUl = details_container.find('.el-custom--details--body .el-custom--details--body-product-details .el-custom--details--body-product-details-nutritional ul');
                details_container.attr('data-container-parent', attrIndex);
                details_container.find('.el-custom--details--body .el-custom--details--body-product-details h2.el--custom__title').text(attTitle);
                details_container.find('.el-custom--details--body .el-custom--details--body-product-details .el--custom__description').html(attrDescription);
                details_container.find('.el-custom--details--body .el-custom--details--body-wrapper-image').find('img').attr('src', attrImg);
                details_container.find('.el-custom--details--body .el-custom--details--body-wrapper-image').find('img').attr('alt', attrImgAlt);

                if (attArray !== undefined) {
                    var splitData = attArray.split(",");
                    parentUl.empty();
    
                    for (let index = 0; index < splitData.length; index++) {
                        if(index % 2 == 0) {
                            var li = $("<li></li>");
                            var spanVal = $("<span></span>").text(splitData[index]);
                            var spanName = $("<span></span>").text(splitData[index+1]);
    
                            li.append(spanVal, spanName);
                            parentUl.append(li);
                        }
                    }
                }
            }
        } 

            // hidethirdInactive();
            addClassToDetails();
            markerPreviousAndNextProducts ();

        $(window).resize(function(){
            const totalWidth = $(window).width();
            moveMarker();
        });
        moveMarker();

        var owl = $('.owl-carousel');
        owl.owlCarousel({
            slideBy: 1,
            loop: true,
            center: true,
            mouseDrag: true,
            autoWidth: false,
            autoHeight: true,
            nav: true,
            responsive: {
                0: {
                    items: 1.95
                },
                300: {
                    items: 2
                },
                450: {
                    items: 3
                },
                600: {
                    items: $(".products--card").length >= 5 ? 5 : 3
                }, 
                1000: {
                    items: $(".products--card").length >= 5 ? 5 : 3
                }
            }
        });
        owl.on('changed.owl.carousel', function(event) {
            $(".el-custom--details").removeClass('reload');
            setTimeout(() => {
                hidethirdInactive()
                addClassToDetails();
            }, 100);
        })
        owl.on('loaded.owl.lazy', function(event) {
            console.warn("llegado")
            setTimeout(() => {
                hidethirdInactive();
            }, 1000);
        });
        $('.owl-carousel .item').each(function(){
            $(this).click(function() {
                $(".el-custom--details").removeClass('reload');
                const index = parseInt($(this).attr('data-attr-index'));
                owl.trigger('to.owl.carousel', index, [300]);
                addClassToDetails()
            })
        });
      setTimeout(() => {
        hidethirdInactive();
    }, 800);
    }
});