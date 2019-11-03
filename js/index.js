$(function(){
    console.log("ready");
    
    /* GET USERNAME AND IMAGE FROM LOCAL STORAGE */
    var userEmail = localStorage.getItem("username");
    var userNameArray = userEmail.split('@');
    var userName = userNameArray[0];
    var userImage = localStorage.getItem("userimage");
    
    /* Display User Image */
    console.log(userImage);
    $(".nav-profile-image").css("background-image","url(../images/" + userImage + ")");
    
    /* Print Username to welcome message */
    $(".header-text").find("h1").text("Welcome back " + userName);
    $(".mobile-menu-section1").find("h3").text("Hi "+ userName);
    
     
    
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
    $(".header-circle").on("click",function(){
       var slideNr = $(this).data("index"); 
        
        /* Set circle class to active */
        $(".header-circle").removeClass("header-circle-active");
        $(this).addClass("header-circle-active");
        
        /* Determine which slide to show */
        if(slideNr === 1){
            /* Set Header Class to Active */
            $(".header-slide").removeClass("header-slide-active");
            $('[data-slide = "1"]').addClass("header-slide-active");
            $(".header-text").find("h3").text("1.Avengers:Infinity War");
        }else if(slideNr === 2){
             /* Set Header Class to Active */
            $(".header-slide").removeClass("header-slide-active");
            $('[data-slide = "2"]').addClass("header-slide-active");
            $(".header-text").find("h3").text("2.Captain America:The Winter Soldier");
        }else{
            /* Set Header Class to Active */
            $(".header-slide").removeClass("header-slide-active");
            $('[data-slide = "3"]').addClass("header-slide-active");
            $(".header-text").find("h3").text("3.Inception");
        }
    });
    /*---------------- HEADER SLIDER JS END ----------------*/
    
    /*---------------- IMAGE CAROUSEL JS START ---------------- */
    $(".carousel").carouFredSel({
        width: "100%",
		
       
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
	+localStorage.setItem('RecNum', 0);
	index = 0;
    for (index; index < 8; index++){
		
		console.log(index);
		
		var movieslength = movies.length;
		var randomNumberMovie = Math.floor((Math.random() * movieslength));
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
		
		$.ajax(settings).done(function (response) {
			//console.log("Test ", response);
			
		});
		
		for (i = 0; i < movieNameLength; i++ ) {
			movieNameAPISearch = movieNameAPISearch.replace(" ", "%20");
		}
		//console.log(movieNameAPISearch);
		
		var apiCall = settings.url;
		
		$.getJSON(apiCall, dataCallBack);
		
		
		function dataCallBack(moviesData){
			//console.log(moviesData);
			
			var movieName = moviesData.results[0].original_title;
			var movieOverview = moviesData.results[0].overview;
			var movieRating = moviesData.results[0].vote_average;
			var movieTagline = moviesData.results[0].tagline;
			var movieRuntime = moviesData.results[0].runtime;
			var movieGenre = moviesData.results[0].genre_ids;
			var movieIMDBid = moviesData.results[0].id;
			var moviePoster = 'https://image.tmdb.org/t/p/original' + moviesData.results[0].poster_path;

		console.log(movieName, movieGenre, movieIMDBid);
			var newRecNum = parseFloat(localStorage.getItem('RecNum')) + 1;
			
			localStorage.setItem('RecNum', newRecNum);
			
			console.log(newRecNum);
			
			//$("#posterRefs").append("<div class='imageRef' data='Test'></div>");
			//console.log('Test');		
			
			$('.'+newRecNum+'poster').find('img').attr('src', moviePoster);
			$('.'+newRecNum+'name').text(movieName);
			$('.'+newRecNum+'hover').find('img').attr('src', moviePoster);
		};
		
		
	};
    
	

  
});