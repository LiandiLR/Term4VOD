$(function(){
    console.log("Hello");
    
    $("#Add-Class").on("click",function(){
        console.log("hell");
        $('#AddHere').append("<div class='item col-xs-6'>Extra Small</div><div class='xs-spacer col-xs-3'></div>");
        $('#AddHereMed').append("<div class='item col-xs-3'>Small/Medium</div>");
        $('#AddHereTab').append("<div class='item col-xs-3'>Medium</div>");
        $('#AddHerePC').append("<div class='item col-xs-2'>Large</div>");
    });
    
});