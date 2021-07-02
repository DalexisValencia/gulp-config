(function($) {
    $(document).ready(function() {
        $(".close-menu").click(function() {
            $(".abi--main-header nav").removeClass("active");
        })
        $(".open-mobile-menu").click(function() {
            console.error("click dado")
            $(".abi--main-header nav").addClass("active");
        })
    })
    if ($('#how-to-participe-sliders').length) {
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            navContainer: '.how-to-participe-navigation'
        });
    }
    if ($('#questionnaire--questions').length) {
        var questionCarousel = $('.questionnaire--questions.owl-carousel');
        var totalQuestions = $('.questionnaire--questions__question').length;
        var currentQuestion = 0;
        var answers = [];
        questionCarousel.owlCarousel({
            items: 1,
            loop: true,
            dotsContainer: '.questionnaire--navigation',
            nav: false,
            mouseDrag: false,
            touchDrag: false,
        });
        $('.el-custom--button#next-question').click(function() {
            if ((currentQuestion + 1) === totalQuestions) {
                // se valida el 
                var isAnythingSelected = $(".owl-item.active").find(".questionnaire--questions__question .option.active");
                if (isAnythingSelected.length) {
                    answers.push({
                        question: currentQuestion,
                        answer: isAnythingSelected.attr("attr-list"),
                    })
                    console.warn(answers, 'answers');
                } else {
                    alert("Se debe seleccionar una respuesta");
                }

            } else {
                checkIfSelect();
            }
        })
        questionCarousel.on('changed.owl.carousel', function(event) {
            currentQuestion = event.page.index;
        })

        $(".questionnaire--questions__question .option").click(function() {
            $('.questionnaire--questions__question .option').removeClass('active');
            $(this).addClass("active");
        });


        function checkIfSelect() {
            var isAnythingSelected = $(".owl-item.active").find(".questionnaire--questions__question .option.active");

            if (isAnythingSelected.length) {
                answers.push({
                    question: currentQuestion,
                    answer: isAnythingSelected.attr("attr-list"),
                })
                questionCarousel.trigger('next.owl.carousel');
            } else {
                alert("Se debe seleccionar una respuesta");
            }
        }
    }
})(jQuery);