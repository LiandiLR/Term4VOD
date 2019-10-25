$(function(){
    
<<<<<<< Updated upstream
    console.log('helloooooo');
    
    var apiCall = 'https://api.themoviedb.org/3/movie/76341?api_key=9b788b49ee42354dbc57b8a25b87c9df';
=======
     /* -------------------- NAVIGATION JS START ----------------------*/
>>>>>>> Stashed changes
    
    $.getJSON(apiCall, dataCallBack);
    
    function dataCallBack(moviesData){
        console.log(moviesData);
        
        var movieName = moviesData.original_title;
        var movieOverview = moviesData.overview;
        var movieBudget = moviesData.budget;
        var movieRating = moviesData.vote_average;
        var movieTagline = moviesData.tagline;
        var movieReleaseDate = moviesData.release_date;
        var movieRuntime = moviesData.runtime;
        var movieGenre = moviesData.genres[0,1,2].name;
        var moviePoster = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg';
        
<<<<<<< Updated upstream
        console.log(movieBudget, movieName, movieGenre, movieOverview, movieRating, movieReleaseDate, movieRuntime, movieTagline);
    };   
    
=======
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
    
<<<<<<< HEAD

    
    
    /*$("#FullName").removeAttr('disabled'); */
    
    
    /* -------------------- FILTER MOVIES / SERIES JS START ----------------------*/
 
    $("#title-box").on("click", function(){
        $("#genre-textbox").prop('disabled', true);
        $(".genre").css({opacity:0.1});
        $("#release-year").prop('disabled', true);
        $(".release-year").css({opacity:0.1});
        $("#rating-textbox").prop('disabled', true);
        $(".rating").css({opacity:0.1});
    });    
    
    
    
    
    
    /* -------------------- FILTER MOVIES / SERIES JS START ----------------------*/
    
    var apiRequest = new XMLHttpRequest();
    
    
    apiRequest.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=c0e1ea77', true);
    
    apiRequest.send();
    
    apiRequest.onload = function(){
        var data = JSON.parse(this.response);
        
    }
>>>>>>> Stashed changes
        
=======
        //console.log("Hello");
    
// 
    
//    console.log(movieslength);
//    console.log(randomNumberMovie);
//    console.log(randomMovieName);
//    
//    console.log(serieslength);
//    console.log(randomNumberSeries);
//    console.log(randomSeriesName);
//    
    
//   for(i=0; i < 24 ; i++){
        //$('#AddHerePC').append("<div class='item col-xs-2'><img src="+  +"></div>");
//        
//        var movieslength = movies.length;
//        var randomNumberMovie = Math.floor((Math.random() * movieslength));
//        var randomMovieName = movies[randomNumberMovie];
//        
//        var movieAPIsearch = "http://www.omdbapi.com/?apikey=c0e1ea77&plot=full&t=" + randomMovieName;
//        
//        fetch(movieAPIsearch).then(res => res.json()).then((out) => {console.log(out);}).catch(err => console.error(err));        
//        
//        
//       $("#addPosters").append("<div class='poster-lg-container-mobile col-sm-6 col-md-3 col-lg-2 poster'><img src='" + movieAPIsearch.Poster + "'></div>");
//        
//    };
//    
//    for(i=0; i < 24 ; i++){
//        //$('#AddHerePC').append("<div class='item col-xs-2'><img src="+  +"></div>");
//        
//        var serieslength = series.length;
//        var randomNumberSeries = Math.floor((Math.random() * serieslength));
//        var randomSeriesName = series[randomNumberSeries];
//        
//        var seriesAPIsearch = "http://www.omdbapi.com/?apikey=c0e1ea77&plot=full&t=" + randomSeriesName;
//        fetch(seriesAPIsearch).then(res => res.json()).then((out) => {console.log('Output: ', out);}).catch(err => console.error(err));
//        
//    };
	
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
		console.log("Test ", response);
		
	});
	
	for (i = 0; i < movieNameLength; i++ ) {
		movieNameAPISearch = movieNameAPISearch.replace(" ", "%20");
	}
	console.log(movieNameAPISearch);
	
	var apiCall = settings.url;
    
    $.getJSON(apiCall, dataCallBack);
    
    function dataCallBack(moviesData){
        console.log(moviesData);
>>>>>>> fae919b277386fcccb2972cd2d2f579b902ccd5d
        
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