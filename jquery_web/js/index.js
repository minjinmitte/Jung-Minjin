/*18. fade in-hide and show*/
$(document).ready(function(){
    $("#ccc").click(function(){
    	$("#bulb1").hide();
    	$("#bulb2").show();
    	$(".p_link").show();
    	
    });
});

/*mouse over*/
$(document).ready(function(){
    $("#ccc").mouseover(function(){
        $("#ccc").css("background-color", "yellow");
    });
    $("#ccc").mouseout(function(){
        $("#ccc").css("background-color", "black");
    });
});