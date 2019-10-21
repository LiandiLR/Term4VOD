$(function(){
    
    console.log('hello');
    
     /* -------------------- NAVIGATION JS START ----------------------*/
    
    /* Mobile Side Navigation Slide In */
     $(".fa-bars").on("click",function(){
         $(".fa-bars").css({color:"rgb(208,73,37)"});
         $(".fa-bars").css({transform:"rotate(180deg)"});
         $(".mobile-menu").css({width:"88%"});
         $(".mobile-menu").css({opacity:"1"});
         $(".mobile-menu-section1").css({opacity:"1"});
         $(".mobile-menu-section2").css({opacity:"1"});
         $(".mobile-menu-section3").css({opacity:"1"});
     });
    
    /* Mobile Side Navigation Slide Out */
    $(".fa-times").on("click",function(){
        $(".fa-bars").css({color:"rgb(102,102,102)"});
        $(".fa-bars").css({transform:"rotate(-180deg)"})
        $(".mobile-menu-section1").css({opacity:"0",transition:"0.1s"});
        $(".mobile-menu-section2").css({opacity:"0",transition:"0.1s"});
        $(".mobile-menu-section3").css({opacity:"0",transition:"0.1s"});
        $(".mobile-menu").css({opacity:"0"})
        $(".mobile-menu").css({width:"0"})
    });
    
    /* Mobile Nav Item Click */
    $(".mobile-menu-nav-item").on("click",function(){
        $(".mobile-menu-nav-item").removeClass("mobile-menu-nav-active");
        $(this).addClass("mobile-menu-nav-active");
    });
    
    /* Tablet Nav Item Click */
    $(".nav-item").on("click",function(){
        $(".nav-item").removeClass("nav-active");
        $(this).addClass("nav-active");
        $(this).find("i").css({transform:"rotate(-180deg)"})
    });
    
    /* Tablet Nav Item Mouse Enter */
    $(".nav-item").on("mouseenter",function(){
        
        var navItemClass = $(this).hasClass("nav-active");
        
        if(navItemClass === false){
            $(this).find("h4").css({'padding-top':"10px",'padding-bottom':"8px",color:"rgb(208,73,37)"});
            $(this).find("div").css({display:"block"});
        }else{
            /* Do nothing */
        }
        
    });
    
    /* Tablet Nav Item Mouse Leave */
    $(".nav-item").on("mouseleave",function(){
        $(this).find("h4").css({'padding-top':"20px",'padding-bottom':"0px",color:"rgb(102,102,102)"});
        $(this).find("div").css({display:"none"});
    });
    
    /* -------------------- NAVIGATION JS END ----------------------*/
    
    var apiRequest = new XMLHttpRequest();
    
    
    apiRequest.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=c0e1ea77', true);
    
    apiRequest.send();
    
    apiRequest.onload = function(){
        var data = JSON.parse(this.response);
        
    }
        
        
        
});