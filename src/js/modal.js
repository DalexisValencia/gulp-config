
$(document).ready(function() {
    var modal = $("#modalRegister");
    // console.error('función del modal agregada');
    if(modal.length){
        var btn = $("#openModal");
        var span = $(".close");

        btn.click(function() {
            console.error('dado click')
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