/*16, 17, 18 nav bar toggle*/
$(document).ready(function(){
    $("#btn").click(function(){
        $(".hide_menu").slideToggle();
    });
});

/*fancybox*/
 $(document).ready(function() {
     $(".fancybox").fancybox({
         openEffect  : 'none',
         closeEffect : 'none',
         afterClose : (function() {location.reload();return;})
                });
            });