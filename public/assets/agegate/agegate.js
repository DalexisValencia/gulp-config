jQuery(document).ready(function() {
    const agegateVisible = $("body.agegate-visible");

    if (agegateVisible) {
        const Originalfooter = agegateVisible.find("footer.abi--main-main-footer").clone();

        if (Originalfooter.length == 0) {
            agegateVisible.find("#age-gate-01").addClass("vertically-center");
            console.info("adding vertically center");
            console.error('No se ha encontrado un footer para agregar al agegate');
            return;
        }
        $(".agegate-visible #agv2 #age-gate-01, .agegate-visible #agv2 #age-gate-02, .agegate-visible #agv2 #age-gate-03")
            .append(Originalfooter);
        // $('.agegate-visible #agv2').append(Originalfooter)
    }
});