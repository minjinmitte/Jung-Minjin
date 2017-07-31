/*16,17,18 nav bar toggle*/
$(document).ready(function(){
    $("#btn").click(function(){
        $(".hide_menu").slideToggle();
    });
});

/*21. Icon dragable*/
   $( function() {
    $( "#draggable" ).draggable();
  } );