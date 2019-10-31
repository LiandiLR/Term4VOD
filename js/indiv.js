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
    
    $(".action-buttons my-list").on("mouseleave", function(){
        $(this).css({"border" : "none"});
    }); 
    
    $(".my-list").hide();
    
    $(".poster-lg-container-mobile").on("mouseenter", function(){
        $(this).find(".action-buttons").fadeOut();    
    });
	
});