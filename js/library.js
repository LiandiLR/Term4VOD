$(function(){
	

	

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
    
    /* -------------------- MOVIES SERIES SWITCH JS START ----------------------*/
	
	$(".movies-series-slider-mobile").on("click",function(){
        if($("input[type=checkbox]").is(":checked")){
            $(".movies").show();
            $(".all-movies-heading").show();
            $("#addseriesPosters").hide();
            $(".all-series-heading").hide();
			populateMovies();
        }else{
            $(".movies").hide();
            $(".all-movies-heading").hide();
			$("#addseriesPosters").show();
            $(".all-series-heading").show();
			populateSeries();
        }
    });
    
    $(".movies-series-slider-desktop").on("click",function(){
        if($("input[type=checkbox]").is(":checked")){
            $(".movies").show();
            $(".all-movies-heading").show();
            $("#addseriesPosters").hide();
            $(".all-series-heading").hide();
			populateMovies();
        }else{
            $(".movies").hide();
            $(".all-movies-heading").hide();
			$("#addseriesPosters").show();
            $(".all-series-heading").show();
			populateSeries();
        }
    });
    
    
    
    /* -------------------- MOVIES SERIES SWITCH JS START ----------------------*/
    

//    console.log("toets");
    
    $("#title-box").on("click", function(){
        $("#genre").prop('disabled', true);
        $(".genre").css({opacity:0.1});
        $("#release-year").prop('disabled', true);
        $(".release-year").css({opacity:0.1});
        $("#rating").prop('disabled', true);
        $(".rating").css({opacity:0.1});
    });
    
    $(".poster-lg-container-mobile").on("click", function(){
        console.log("poster click works")       ;
    });
    
    
    /*$("#FullName").removeAttr('disabled'); */
    
    
    /* -------------------- FILTER MOVIES / SERIES JS START ----------------------*/  
    

//    for (var i = 0; i < 24; i++) {
//        $("#addPosters").append("<div class='poster-lg-container-mobile col-sm-6 col-md-3 col-lg-2'><div class='library-poster1'><img src='https://image.tmdb.org/t/p/w500/lN0mP3BNaKirkKl6FJ0yL0wmjSJ.jpg'></div></div>");  
//        
//
//        };
    
    
    /* -------------------- DISABLE FILTER BUTTONS ----------------------*/
    /*$("#genre-textbox").on("click",function(){
        $("#genre-textbox").removeAttr("disabled");
        $("#title-box").attr("disabled","disabled");
        $("#release-year").attr("disabled","disabled");
        $("#rating-textbox").prop("disabled",true);
    });
    
    $("#title-box").on("click",function(){
        $("#title-box").removeAttr("disabled");
        $("#genre-textbox").attr("disabled","disabled");
        $("#release-year").attr("disabled","disabled");
        $("#rating-textbox").prop("disabled",true);
    });
    
    $("#release-year").on("click",function(){
        $("#release-year").removeAttr("disabled");
        $("#title-box").attr("disabled","disabled");
        $("#genre-textbox").attr("disabled","disabled");
        $("#rating-textbox").prop("disabled","true");
    });
    
    $("#rating-textbox").on("click",function(){
        $("#rating-textbox").prop("disabled","false");
        $("#title-box").attr("disabled","disabled");
        $("#genre-textbox").attr("disabled","disabled");
        $("#release-year").attr("disabled","disabled");
    });*/
    
    /* -------------------- ON SEARCH BUTTON CLICK ----------------------*/
    $("#search").on("click", function(){
        
        /* Store selected values in variables */
        var movieTitle = $("#title-box").val();
        var genreSelected = document.getElementById("genre-textbox").value;
        var ratingSelected = document.getElementById("rating-textbox").value; 
        var ratingSelectedArray = ratingSelected.split('+');
        ratingSelected = ratingSelectedArray[0];
        var releaseYear = document.getElementById("release-year").value;
        
        console.log(movieTitle);  
        console.log(genreSelected);
        console.log(releaseYear);
        console.log(ratingSelected);

        // Remove all movie posters
        $(".movie-poster").remove();
        
        // LOOP THROUGH MOVIES AND SERIES JS FILE
        for (var i = 0; i < movieslength; i++) {
            
            if(movies[i] === movieTitle){ // Movie Title If Statement
               console.log("title found");
                
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://api.themoviedb.org/3/search/movie?api_key=9b788b49ee42354dbc57b8a25b87c9df&query=" + movies[i],
                    "method": "GET",
                    "headers": {},
                    "data": "{}"
			     }
                
                $.ajax(settings).done(function (response) {
				    //console.log("Test ", response);
			     });
                
                var apiCall = settings.url;
			
			     $.getJSON(apiCall, dataCallBack);
			
			     function dataCallBack(moviesData){
				    //console.log(moviesData);
                     
                    var movieName = moviesData.results[0].original_title;
                    var movieGenre = moviesData.results[0].genre_ids;
                    var movieRatingArray = moviesData.results[0].vote_average;
                    var movieReleaseYear = moviesData.results[0].release_date;
                    var movieReleaseYearArray = movieReleaseYear.split('-');
                    var movieIMDBid = moviesData.results[0].id;
                     
                    movieReleaseYear = movieReleaseYearArray[0];
                    var moviePoster = 'https://image.tmdb.org/t/p/original' + moviesData.results[0].poster_path;
                     
                     console.log(movieName);
                     console.log(movieGenre);
                     console.log(movieReleaseYear);
                     console.log(movieRatingArray);
                     console.log(moviePoster);
                     
                     $("#addPosters").append("<div class='movie-poster col-xs-6 col-sm-6 col-md-3 col-lg-2'><a href='indiv.html'><img class='library-poster' data='"+ movieIMDBid + "'  src='" + moviePoster + "' width='100%' height='100%'><div class='poster-hover'><div class ='poster-name'>" + movieName + "</div><img class='library-poster' data='"+ movieIMDBid + "'  src='" + moviePoster + "' width='100%' height='72%'><div class ='poster-buttons'><div class='poster-button-info'><i class='fas fa-info'></i></div><div class='poster-button-play'>Play</div><div class='poster-button-list'><i class='fas fa-plus'></i></div></div></a></div>");
                 }
                
            }   
    
        
            // DETERMINE SELECTED GENRE ID + APPEND MOVIES WITH THE SELECTED GENRE ID
            if ((genres[i].name) == genreSelected){
                var genreID = genres[i].id;  
                
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://api.themoviedb.org/3/discover/movie?api_key=9b788b49ee42354dbc57b8a25b87c9df&with_genres=" + genreID,
                    "method": "GET",
                    "headers": {},
                    "data": "{}"
			     }
                
                $.ajax(settings).done(function (response) {
				    //console.log("Test ", response);
			     });
                
                var apiCall = settings.url;
			
			     $.getJSON(apiCall, dataCallBack);
			
			     function dataCallBack(moviesData){
                    console.log(moviesData);
                    
                    // LOOP THROUGH API MOVIES
                    for(x = 0; x < moviesData.results.length; x++){
                        var movieName = moviesData.results[x].original_title;
                        var movieGenre = moviesData.results[x].genre_ids;
                        var movieRatingArray = moviesData.results[x].vote_average;
                        var movieReleaseYear = moviesData.results[x].release_date;
                        
                        var movieReleaseYearArray = movieReleaseYear.split('-');
                        var movieIMDBid = moviesData.results[x].id;
                        
                        movieReleaseYear = movieReleaseYearArray[0];
                        var moviePoster = 'https://image.tmdb.org/t/p/original' + moviesData.results[x].poster_path;
                        
                        console.log(movieName);
                        console.log(movieGenre);
                        console.log(movieReleaseYear);
                        console.log(movieRatingArray);
                        console.log(moviePoster);
                    
                        $("#addPosters").append("<div class='movie-poster col-xs-6 col-sm-6 col-md-3 col-lg-2'><a href='indiv.html'><img class='library-poster' data='"+ movieIMDBid + "'  src='" + moviePoster + "' width='100%' height='100%'><div class='poster-hover'><div class ='poster-name'>" + movieName + "</div><img class='library-poster' data='"+ movieIMDBid + "'  src='" + moviePoster + "' width='100%' height='72%'><div class ='poster-buttons'><div class='poster-button-info'><i class='fas fa-info'></i></div><div class='poster-button-play'>Play</div><div class='poster-button-list'><i class='fas fa-plus'></i></div></div></a></div>");
                    }
                 } // Data callback function end
            }; 
            // Genre If Statement end
            
            
            // APPEND MOVIES WITH THE SPECIFIED RELEASE YEAR
            if (releaseYear !== ""){ 
                
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://api.themoviedb.org/3/discover/movie?api_key=9b788b49ee42354dbc57b8a25b87c9df&primary_release_year=" + releaseYear,
                    "method": "GET",
                    "headers": {},
                    "data": "{}"
			     }
                
                $.ajax(settings).done(function (response) {
				    //console.log("Test ", response);
			     });
                
                var apiCall = settings.url;
			
			     $.getJSON(apiCall, dataCallBack);
			
			     function dataCallBack(moviesData){
                    console.log(moviesData);
                    
                    // LOOP THROUGH API MOVIES
                    for(x = 0; x < moviesData.results.length; x++){
                        var movieName = moviesData.results[x].original_title;
                        var movieGenre = moviesData.results[x].genre_ids;
                        var movieRatingArray = moviesData.results[x].vote_average;
                        var movieReleaseYear = moviesData.results[x].release_date;
                        
                        var movieReleaseYearArray = movieReleaseYear.split('-');
                        var movieIMDBid = moviesData.results[x].id;
                        
                        movieReleaseYear = movieReleaseYearArray[0];
                        var moviePoster = 'https://image.tmdb.org/t/p/original' + moviesData.results[x].poster_path;
                        
                        console.log(movieName);
                        console.log(movieGenre);
                        console.log(movieReleaseYear);
                        console.log(movieRatingArray);
                        console.log(moviePoster);
                    
                        $("#addPosters").append("<div class='movie-poster col-xs-6 col-sm-6 col-md-3 col-lg-2'><a href='indiv.html'><img class='library-poster' data='"+ movieIMDBid + "'  src='" + moviePoster + "' width='100%' height='100%'><div class='poster-hover'><div class ='poster-name'>" + movieName + "</div><img class='library-poster' data='"+ movieIMDBid + "'  src='" + moviePoster + "' width='100%' height='72%'><div class ='poster-buttons'><div class='poster-button-info'><i class='fas fa-info'></i></div><div class='poster-button-play'>Play</div><div class='poster-button-list'><i class='fas fa-plus'></i></div></div></a></div>");
                    }
                 } // Data callback function end*/
            }; 
            // Release YearS If Statement end
            
            
            
            // APPEND MOVIES WITH THE SPECIFIED RATING
            if(ratingSelected !== "Select Rating"){ 
                
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://api.themoviedb.org/3/discover/movie?api_key=9b788b49ee42354dbc57b8a25b87c9df&vote_average.gte=" + ratingSelected,
                    "method": "GET",
                    "headers": {},
                    "data": "{}"
			     }
                
                $.ajax(settings).done(function (response) {
				    //console.log("Test ", response);
			     });
                
                var apiCall = settings.url;
			
			     $.getJSON(apiCall, dataCallBack);
			
			     function dataCallBack(moviesData){
                    console.log(moviesData);
                    
                    // LOOP THROUGH API MOVIES
                    for(x = 0; x < moviesData.results.length; x++){
                        var movieName = moviesData.results[x].original_title;
                        var movieGenre = moviesData.results[x].genre_ids;
                        var movieRatingArray = moviesData.results[x].vote_average;
                        var movieReleaseYear = moviesData.results[x].release_date;
                        
                        var movieReleaseYearArray = movieReleaseYear.split('-');
                        var movieIMDBid = moviesData.results[x].id;
                        
                        movieReleaseYear = movieReleaseYearArray[0];
                        var moviePoster = 'https://image.tmdb.org/t/p/original' + moviesData.results[x].poster_path;
                        
                        console.log(movieName);
                        console.log(movieGenre);
                        console.log(movieReleaseYear);
                        console.log(movieRatingArray);
                        console.log(moviePoster);
                    
                        $("#addPosters").append("<div class='movie-poster col-xs-6 col-sm-6 col-md-3 col-lg-2'><a href='indiv.html'><img class='library-poster' data='"+ movieIMDBid + "'  src='" + moviePoster + "' width='100%' height='100%'><div class='poster-hover'><div class ='poster-name'>" + movieName + "</div><img class='library-poster' data='"+ movieIMDBid + "'  src='" + moviePoster + "' width='100%' height='72%'><div class ='poster-buttons'><div class='poster-button-info'><i class='fas fa-info'></i></div><div class='poster-button-play'>Play</div><div class='poster-button-list'><i class='fas fa-plus'></i></div></div></a></div>");
                    }
                 } // Data callback function end*/
            }; 
            // Genre If Statement end
            
        }
        // Movies and Series JS File for loop end
                
             
            
            
            
        
        
        
        
        
        
        
    });
    
    
    
    
    
    
    
    
    /* -------------------- FILTER MOVIES / SERIES JS START ----------------------*/
	
	
	/*------------------ Testing data transfering from library to indiv --------------------------------------*/

	localStorage.setItem('movieIndiv', 'true');
	localStorage.setItem('seriesIndiv', 'false');
	
		var index = 0;
		for(index; index < 24; index++){
			
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
				console.log(moviesData);
				
				var movieName = moviesData.results[0].original_title;
				var movieOverview = moviesData.results[0].overview;
				var movieRating = moviesData.results[0].vote_average;
				var movieTagline = moviesData.results[0].tagline;
				var movieRuntime = moviesData.results[0].runtime;
				var movieGenre = moviesData.results[0].genre_ids;
				var movieIMDBid = moviesData.results[0].id;
				var moviePoster = 'https://image.tmdb.org/t/p/original' + moviesData.results[0].poster_path;
				
				$("#addPosters").append("<div class='movie-poster col-xs-6 col-sm-6 col-md-3 col-lg-2'><a href='indiv.html'><img class='library-poster' data='"+ movieIMDBid + "'  src='" + moviePoster + "' width='100%' height='100%'></a></div>");
                
			}; 
			
			
			
			
		};
	
	function populateMovies(){
		
		$(".addPosters").empty();
		
		localStorage.setItem('movieIndiv', 'true');
		localStorage.setItem('seriesIndiv', 'false');
		
		var index = 0;
		for(index; index < 24; index++){
			
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
				console.log(moviesData);
				
				var movieName = moviesData.results[0].original_title;
				var movieOverview = moviesData.results[0].overview;
				var movieRating = moviesData.results[0].vote_average;
				var movieTagline = moviesData.results[0].tagline;
				var movieRuntime = moviesData.results[0].runtime;
				var movieGenre = moviesData.results[0].genre_ids;
				var movieIMDBid = moviesData.results[0].id;
				var moviePoster = 'https://image.tmdb.org/t/p/original' + moviesData.results[0].poster_path;
				
				//console.log(movieName, movieGenre, movieIMDBid);
				
				$("#addPosters").append("<div class='movie-poster col-xs-6 col-sm-6 col-md-3 col-lg-2'><a href='indiv.html'><img class='library-poster' data='"+ movieIMDBid + "'  src='" + moviePoster + "' width='100%' height='100%'><div class='poster-hover'><div class ='poster-name'>" + movieName + "</div><img class='library-poster' data='"+ movieIMDBid + "'  src='" + moviePoster + "' width='100%' height='72%'><div class ='poster-buttons'><div class='poster-button-info'><i class='fas fa-info'></i></div><div class='poster-button-play'>Play</div><div class='poster-button-list'><i class='fas fa-plus'></i></div></div></a></div>");
                

			}; 
			
			
			
			
		};
	};
    
    
    
    
    function populateSeries(){
		
		$("#addseriesPosters").empty();
		
		localStorage.setItem('seriesIndiv', 'true');
		localStorage.setItem('movieIndiv', 'false');
		
        var indexk = 0;
        for (indexk; indexk < 24; indexk++){
        
            var seriesLength = series.length;
			var randomNumberSeries = Math.floor((Math.random() * seriesLength));
			var randomSeriesName = series[randomNumberSeries];
			
			var seriesNameLength = randomSeriesName.length;
			var seriesNameAPISearch = randomSeriesName;
            
            console.log(randomSeriesName);
			console.log(seriesNameLength);
			
			var seriesSettings = {
				"async": true,
				"crossDomain": true,
				"url": "https://api.themoviedb.org/3/search/tv?api_key=9b788b49ee42354dbc57b8a25b87c9df&query=" + seriesNameAPISearch,
				"method": "GET",
				"headers": {},
				"data": "{}"
			}
			
			$.ajax(seriesSettings).done(function (response) {
				
			});
			
			for (i = 0; i < seriesNameLength; i++ ) {
				seriesNameAPISearch = seriesNameAPISearch.replace(" ", "%20");
			}
			
			console.log(seriesNameAPISearch);
			
			var apiSeriesCall = seriesSettings.url;
			
			$.getJSON(apiSeriesCall, dataSeriesCallBack);
			
			function dataSeriesCallBack(seriesData){
				console.log(seriesData);
				
				var seriesName = seriesData.results[0].original_name;
				var seriesOverview = seriesData.results[0].overview;
				var seriesRating = seriesData.results[0].vote_average;
				var seriesTagline = seriesData.results[0].tagline;
				var seriesRuntime = seriesData.results[0].runtime;
				var seriesGenre = seriesData.results[0].genre_ids;
				var seriesIMDBid = seriesData.results[0].id;
				var seriesPoster = 'https://image.tmdb.org/t/p/original' + seriesData.results[0].poster_path;
				
				$("#addseriesPosters").append("<div class='movie-poster col-xs-6 col-sm-6 col-md-3 col-lg-2'><a href='indiv.html'><img class='library-poster' data='"+ seriesIMDBid + "'  src='" + seriesPoster + "' width='100%' height='100%'><div class='poster-hover'><div class ='poster-name'>" + seriesName + "</div><img class='library-poster' data='"+ seriesIMDBid + "'  src='" + seriesPoster + "' width='100%' height='72%'><div class ='poster-buttons'><div class='poster-button-info'><i class='fas fa-info'></i></div><div class='poster-button-play'>Play</div><div class='poster-button-list'><i class='fas fa-plus'></i></div></div></a></div>");
				
        	};
		};
	  };
    
    /*---------------- POSTERS HOVER START ----------------*/
    
    //$(".").on("mouseenter", function(){
      //  console.log("test");
    //});
    
    
    /*$(".image-container").hover(function(){
        $(this).find(".poster-name").slideDown();
        $(this).find(".poster-buttons").fadeIn(500);
        $(this).find("img").css({filter:"grayscale(100%)", opacity:"0.5", transition:"0.5s ease"})
    },function(){
        $(this).find(".poster-name").slideUp();
        $(this).find(".poster-buttons").fadeOut(400);
        $(this).find("img").css({filter:"grayscale(0%)", opacity:"1"})
    });   */     
   
    
    /*---------------- POSTERS HOVER END ----------------*/ 
    
	
	console.log("WTF");
	
			$(document).on("click", ".library-poster", function() {
        		localStorage.setItem('imdbID', this.getAttribute('data'));
				console.log(this.getAttribute('data'));
    		});
    
    /* -------------------- Filter Button Click - Show/Hide Filter Options ----------------------*/
    
    $(".library-filter-mobile").on("click",function(){
        if($(this).hasClass("filter-active")){
            $(this).removeClass("filter-active");
            $(".library-genre-mobile").slideUp(600);
        }else{
            $(this).addClass("filter-active");
            $(".library-genre-mobile").slideDown(600);
        }
    });
    
    $(".library-filter-desktop").on("click",function(){
        if($(this).hasClass("filter-active")){
            $(this).removeClass("filter-active");
            $(".library-genre-mobile").slideUp(600);
        }else{
            $(this).addClass("filter-active");
            $(".library-genre-mobile").slideDown(600);
        }
    });
    
        $(".movie-poster").hover(function(){
        $(this).find(".poster-name").slideDown();
        $(this).find(".poster-buttons").fadeIn(500);
        $(this).find("img").css({filter:"grayscale(100%)", opacity:"0.5", transition:"0.5s ease"})
    },function(){
        $(this).find(".poster-name").slideUp();
        $(this).find(".poster-buttons").fadeOut(400);
        $(this).find("img").css({filter:"grayscale(0%)", opacity:"1"})
    });
    

	
	
	
	
	
	
	
	
    
});//end of ready event 



	

	
