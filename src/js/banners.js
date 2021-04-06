$(document).ready(function(){
    // console.info('holiwis', resizeBanner());
   setTimeout(() => {
       console.info('llamado')
    // resizeBanner()
   }, 2000);
});

function resizeBanner() {
    var banner = $('#wrapper-banner');
    var width = banner.innerWidth();
    banner.css( 'height',( width * 0.58) +'px' );
    console.info(width, 'banner')
}