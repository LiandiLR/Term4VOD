$(function(){
	
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
        
        $(".indiv-content h2").text(movieOverview);
        $("#movie-series-words h1").text(movieName);
        $("#movie-series-words h2").text(movieName);
        $(".movie-rating").text(movieRating);
        $(".movie-rating-desktop").text(movieRating);
        $(".poster-image").find("img").attr("src", moviePoster);
        $(".poster-image-desktop").find("img").attr("src", moviePoster);
        $(".genres h3").text(movieGenre);
        $(".release-date h3").text(movieReleaseDate);
        $(".runtime h3").text(movieRuntime);
        $(".budget h3").text("$" + movieBudget);
        $(".tagline h3").text(movieTagline);
        
        /* ADD TO LIST CLICK EVENT */
        $(".my-list").on("click", function(moviesData){
            localStorage.setItem("movieName", movieName);
            localStorage.setItem("moviePoster", moviePoster);
            
        }); // My list click event end
        
        
    };  
    
    
                     
                     
    
    $(".play").on("mouseenter", function(){
        $(this).css({"background-color" : "#d04925", "color" : "#181819", "cursor" : "pointer"});
    });
    
    $(".play").on("mouseleave", function(){
        $(this).css({"border" : "1px solid #d04925", "color" : "#d04925", "background-color" : "#181819"});
    });   
    
    $(".my-list").on("mouseenter", function(){
        $(this).css({"border" : "1px solid #656565", "cursor" : "pointer"});
    });
    
    $(".my-list").on("mouseleave", function(){
        $(this).css({"border" : "none"});
    }); 
    

    
    $(".poster-lg-container-mobile").on("mouseenter", function(){
        $(this).find(".action-buttons").fadeOut();    
    });
    
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
	
});