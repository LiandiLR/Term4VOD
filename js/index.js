$(function(){
    console.log("ready");
    
    /* On Page Load, display active slide content */
    $(".header-slide-content").fadeIn(600);
    
    /*---------------- NAVIGATION JS START ----------------*/
    
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
    
    /*---------------- NAVIGATION JS END ----------------*/

                
    /*---------------- HEADER SLIDER JS START ----------------*/
    /*	Determine Current and Next Active Slide
    var headerSliderWidth = $(".header-slider").width();
    var currentActiveSlideNr = $(".header-slide-active").data("slide"); /* 1 
    var headerSliderArray = $(".header-slider").find(".header-slide"); /* 3 
    var i = 0;
    
    setInterval(function(){
    
        for(i = 0; i < 6; i++){
            if(i === 3){break;}
        
            var headerSliderWidth = $(".header-slider").width();
            var nextActiveSlideNr = currentActiveSlideNr + 1;
            var circleIndexNr = currentActiveSlideNr + 1;

            //Set circle index 
            $(".header-circle").removeClass("header-circle-active");
            $(".header-circle[data-index='" + circleIndexNr + "']").addClass("header-circle-active");
            
            // Remove Active Class + Resize Header Slide
            $(".header-slide").removeClass("header-slide-active");
            $(".header-slide[data-slide='" + currentActiveSlideNr + "']").stop().animate({width:headerSliderWidth*0.15});

            // Resize Next Active Slide + Add Active Class
            $(".header-slide[data-slide='" + nextActiveSlideNr + "']").addClass("header-slide-active");
            $(".header-slide[data-slide='" + nextActiveSlideNr + "']").stop().animate({width:headerSliderWidth*0.70});
                
            
         
    if(currentActiveSlideNr =  3){
        // Run Previous loop
        
             
                var headerSliderWidth = $(".header-slider").width();
                var nextActiveSlideNr = currentActiveSlideNr + 1;
                var circleIndexNr = currentActiveSlideNr + 1;

                //Set circle index 
                $(".header-circle").removeClass("header-circle-active");
                $(".header-circle[data-index='" + circleIndexNr + "']").addClass("header-circle-active");

                // Remove Active Class + Resize Header Slide
                $(".header-slide").removeClass("header-slide-active");
                $(".header-slide[data-slide='" + currentActiveSlideNr + "']").stop().animate({width:headerSliderWidth*0.15});


                // Resize Next Active Slide + Add Active Class
                $(".header-slide[data-slide='" + nextActiveSlideNr + "']").addClass("header-slide-active");
                $(".header-slide[data-slide='" + nextActiveSlideNr + "']").stop().animate({width:headerSliderWidth*0.70});
                
            },3000);
    
    /*---------------- HEADER SLIDER JS END ----------------*/
    
    /*---------------- IMAGE CAROUSEL JS START ---------------- */
    $(".carousel").carouFredSel({
        width: 1350,
       
		items: 6,
		scroll: 1,
		auto: {
		  duration: 1250,
		  timeoutDuration: 2500
		},
		prev: '#prev',
		next: '#next',
		pagination: '#pager'
    });
    
    /*---------------- IMAGE CAROUSEL JS END ----------------*/ 
    
    /*---------------- POSTERS HOVER START ----------------*/ 
    $(".image-container").hover(function(){
        $(this).find(".poster-name").slideDown();
        $(this).find(".poster-buttons").fadeIn(500);
        $(this).find("img").css({filter:"grayscale(100%)", opacity:"0.5", transition:"0.5s ease"})
    },function(){
        $(this).find(".poster-name").slideUp();
        $(this).find(".poster-buttons").fadeOut(400);
        $(this).find("img").css({filter:"grayscale(0%)", opacity:"1"})
    });
        
   
    
    /*---------------- POSTERS HOVER END ----------------*/ 
    
    /*---------------- RECOMMENDED POSTERS  APISTART ----------------*/ 
    
    // Store
    for (i = 1; i < 4; i++){
        var movieslength = movies.length;
        var randomNumberMovie = i + 6;
        var randomMovieName = movies[randomNumberMovie];
        var movieNameLength = randomMovieName.length;
        var movieNameAPISearch = randomMovieName;

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.themoviedb.org/3/search/movie?api_key=9b788b49ee42354dbc57b8a25b87c9df&query=" + movieNameAPISearch,
            "method": "GET",
            "headers": {},
            "data": "{}"
        }
        console.log(i);
        console.log(movieNameAPISearch);
    }

        var apiCall = settings.url;

        $.getJSON(apiCall, dataCallBack);
        
        

        function dataCallBack(moviesData){
            var movieName = moviesData.results[0].original_title;
            var moviePosterComplete = 'https://image.tmdb.org/t/p/w500' + moviesData.results[0].poster_path;
        }
    
     // Movie Name + Poster For Loop Start 
    for (i = 1; i < 4; i++){
        var movieslength = movies.length;
        var randomNumberMovie = i + 6;
        var randomMovieName = movies[randomNumberMovie];
        var movieNameLength = randomMovieName.length;
        var movieNameAPISearch = randomMovieName;

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.themoviedb.org/3/search/movie?api_key=9b788b49ee42354dbc57b8a25b87c9df&query=" + movieNameAPISearch,
            "method": "GET",
            "headers": {},
            "data": "{}"
        }
        console.log(i);
        console.log(movieNameAPISearch);
    }

        var apiCall = settings.url;

        $.getJSON(apiCall, dataCallBack);
        
        

        function dataCallBack(moviesData){
            var movieName = moviesData.results[0].original_title;
            var moviePosterComplete = 'https://image.tmdb.org/t/p/w500' + moviesData.results[0].poster_path;
        }
    
});