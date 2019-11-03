$(function() {
    
    console.log("Hello");
    
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
    
    var movieID = localStorage.getItem('imdbID');
	
	var apiCall = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=9b788b49ee42354dbc57b8a25b87c9df'; 
    
    $.getJSON(apiCall, dataCallBack);
    
    function dataCallBack(moviesData){
        console.log(moviesData);
		var genreLenght = moviesData.genres.length;
		var genreListName = '';
		
		for(i=0; i < genreLenght; i++){
			genreListName = genreListName + i + ',';	
		}
		
		var genreListFinal = parseFloat(genreListName.substring(0, genreListName.length - 1));
		
		
		console.log(genreListFinal);
        
        var movieName = moviesData.original_title;
        var movieOverview = moviesData.overview;
        var movieBudget = moviesData.budget;
        var movieRating = moviesData.vote_average;
        var movieTagline = moviesData.tagline;
        var movieReleaseDate = moviesData.release_date;
        var movieRuntime = moviesData.runtime;
        var movieGenre = moviesData.genres[genreListFinal].name;
        var moviePoster = 'https://image.tmdb.org/t/p/original' + moviesData.poster_path;
        
        console.log(movieBudget, movieName, movieGenre, movieOverview, movieRating, movieReleaseDate, movieRuntime, movieTagline);
        
        
       
        
    };      
    
    
  /*  for(i=0; i < movieslength; i++){
        $('#AddHerePC').append("<div class='item col-xs-2'><img src="+  +"></div>");        
    };   
    
    
    var movieAPIsearch = "http://www.omdbapi.com/?apikey=c0e1ea77&plot=full&t=" + randomMovieName;*/
    
  /*  fetch(movieAPIsearch).then(res => res.json()).then((out) => {console.log('Output: ', out);}).catch(err => console.error(err));
    
    
    fetch(seriesAPIsearch).then(res => res.json()).then((out) => {console.log('Output: ', out);}).catch(err => console.error(err));*/
    
    
        var movieName = localStorage.getItem("movieName");
        var moviePoster = localStorage.getItem("moviePoster");

        console.log(movieName);
        console.log(moviePoster);

        $(".watchlist-1").find("img").attr("src", moviePoster);
        $(".poster-image").find("img").attr("src", moviePoster); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});