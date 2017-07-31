/*16, 17, 18 nav bar toggle*/
$(document).ready(function(){
    $("#btn").click(function(){
        $(".hide_menu").slideToggle();
    });
});

/*20. keyboard event*/
function myFunction(event) {
    var x = event.which;
    document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
}

/*20. form focus event*/
$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ff6d26");
    });
});

/*20. mouse enter events*/
$(document).ready(function(){
    $("#p1").dblclick(function(){
        alert("You can always contact us!");
    });
});