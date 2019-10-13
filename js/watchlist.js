$(function(){
    console.log("Hello");
    
    $("#Add-Class").on("click",function(){
        console.log("hell");
        $('#AddHere').append("<div class='item col-xs-6'>asd</div>");
        $('#AddHereMed').append("<div class='item col-xs-3'>asd</div>");
        $('#AddHereTab').append("<div class='item col-xs-3'>asd</div>");
        $('#AddHerePC').append("<div class='item col-xs-2'>asd</div>");
    });
    
});