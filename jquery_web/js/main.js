/*16, 17, 18 nav bar toggle and slide show*/
$(document).ready(function(){
    $("#btn").click(function(){
        $(".hide_menu").slideToggle();
    });
});

/*19. collabo animate*/
$(document).ready(function(){
    $("#c_txt").click(function(){
        $("#c_img").animate({width: "50%"});
    });
    $("#c_img").click(function(){
        $("#c_img").animate({width: "60%"});
    });
});