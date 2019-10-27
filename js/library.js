$(function(){
    
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
    
    /* -------------------- MOVIES SERIES SWITCH JS START ----------------------*/
    $(".movies-series-slider-mobile").on("click",function(){
        if($("input[type=checkbox]").is(":checked")){
            $(".movies").show();
            $(".series").hide();
        }else{
            $(".movies").hide();
            $(".series").show();
        }
    });
    
    $(".movies-series-slider-desktop").on("click",function(){
        if($("input[type=checkbox]").is(":checked")){
            $(".movies").show();
            $(".series").hide();
        }else{
            $(".movies").hide();
            $(".series").show();
        }
    });
    
    
    
    /* -------------------- MOVIES SERIES SWITCH JS START ----------------------*/
    

    console.log("toets");
    
    $("#title-box").on("click", function(){
        $("#genre").prop('disabled', true);
        $(".genre").css({opacity:0.1});
        $("#release-year").prop('disabled', true);
        $(".release-year").css({opacity:0.1});
        $("#rating").prop('disabled', true);
        $(".rating").css({opacity:0.1});
    });
    
    $(".library-poster1").on("click", function(){
           
    });
    
    
    /*$("#FullName").removeAttr('disabled'); */
    
    
    /* -------------------- FILTER MOVIES / SERIES JS START ----------------------*/  
    
    
    
    $("#search").on("click", function() {
        var movieTitle = $("#title-box").val();
        console.log(movieTitle);  
        

        
        for (i = 0; i < movieNameLength ; i++) {
            if(movieTitle == movieName);
        }
        
    });
    
    
    
    
    
    
    /* -------------------- FILTER MOVIES / SERIES JS START ----------------------*/
    
    var apiRequest = new XMLHttpRequest();
    
    
    apiRequest.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=c0e1ea77', true);
    
    apiRequest.send();
    
    apiRequest.onload = function(){
        var data = JSON.parse(this.response);
        
    }
        
  /*      console.log("Hello");
    
 
    
    console.log(movieslength);
    console.log(randomNumberMovie);
    console.log(randomMovieName);
    
    console.log(serieslength);
    console.log(randomNumberSeries);
    console.log(randomSeriesName);
    
    
   for(i=0; i < 24 ; i++){
        //$('#AddHerePC').append("<div class='item col-xs-2'><img src="+  +"></div>");
        
        var movieslength = movies.length;
        var randomNumberMovie = Math.floor((Math.random() * movieslength));
        var randomMovieName = movies[randomNumberMovie];
        
        var movieAPIsearch = "http://www.omdbapi.com/?apikey=c0e1ea77&plot=full&t=" + randomMovieName;
        
        fetch(movieAPIsearch).then(res => res.json()).then((out) => {console.log(out);}).catch(err => console.error(err));        
        
        
       $("#addPosters").append("<div class='poster-lg-container-mobile col-sm-6 col-md-3 col-lg-2 poster'><img src='" + movieAPIsearch.Poster + "'></div>");
        
    };
    
    for(i=0; i < 24 ; i++){
        //$('#AddHerePC').append("<div class='item col-xs-2'><img src="+  +"></div>");
        
        var serieslength = series.length;
        var randomNumberSeries = Math.floor((Math.random() * serieslength));
        var randomSeriesName = series[randomNumberSeries];
        
        var seriesAPIsearch = "http://www.omdbapi.com/?apikey=c0e1ea77&plot=full&t=" + randomSeriesName;
        fetch(seriesAPIsearch).then(res => res.json()).then((out) => {console.log('Output: ', out);}).catch(err => console.error(err));
        
   }; */
	
	var movieslength = movies.length;
    var randomNumberMovie = Math.floor((Math.random() * movieslength));
    var randomMovieName = movies[randomNumberMovie];
	
	var movieNameLength = randomMovieName.length;
	var movieNameAPISearch = randomMovieName;
    
    
    var serieslength = series.length;
    var randomNumberSeries = Math.floor(Math.random() * serieslength);
    var randomSeriesName = series[randomNumberSeries];
    var seriesNameLength = randomSeriesName.length;
    var seriesNameAPISearch = randomSeriesName;
    
    
    console.log(seriesNameAPISearch);
    console.log(seriesNameLength);
    console.log(serieslength);
    console.log(movieslength);
	
	
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://api.themoviedb.org/3/search/movie?api_key=9b788b49ee42354dbc57b8a25b87c9df&query=" + movieNameAPISearch,
		"method": "GET",
		"headers": {},
		"data": "{}"
	}
	
	$.ajax(settings).done(function (response) {
		console.log("Test ", response);
		
	});
	
	for (i = 0; i < movieNameLength; i++ ) {
		movieNameAPISearch = movieNameAPISearch.replace(" ", " ");
	}
	console.log(movieNameAPISearch);
	
	var apiCall = settings.url;
    
    $.getJSON(apiCall, dataCallBack);
    
    function dataCallBack(moviesData){
        console.log(moviesData);
        fae919b277386fcccb2972cd2d2f579b902ccd5d
        
        var movieName = moviesData.results[0].original_title;
        var movieOverview = moviesData.results[0].overview;
        var movieRating = moviesData.results[0].vote_average;
        var movieTagline = moviesData.results[0].tagline;
        var movieRuntime = moviesData.results[0].runtime;
        var movieGenre = moviesData.results[0].genre_ids;
        var moviePoster = 'https://image.tmdb.org/t/p/w500' + moviesData.results[0].poster_path;
        
        console.log(movieName, movieGenre);
    }; 
    

	
	

	
	$("#addPosters").append("<div class='poster-lg-container-mobile col-sm-6 col-md-3 col-lg-2 poster'><img src='" + + "'></div>");
	
	
	
	
	
    
});