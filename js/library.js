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
            $(".series").hide();
            $(".all-series-heading").hide();
            
        }else{
            $(".movies").hide();
            $(".all-movies-heading").hide();
            $(".series").show();
            $(".all-series-heading").show();
        }
    });
    
    $(".movies-series-slider-desktop").on("click",function(){
        if($("input[type=checkbox]").is(":checked")){
            $(".movies").show();
            $(".all-movies-heading").show();
            $(".series").hide();
            $(".all-series-heading").hide();
        }else{
            $(".movies").hide();
            $(".all-movies-heading").hide();
            $(".series").show();
            $(".all-series-heading").show();
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
    
    
    
    
    
    $("#search").on("click", function() {
        var movieTitle = $("#title-box").val();
        var genreSelected = document.getElementById("genre-textbox").value;
        var ratingSelected = document.getElementById("rating-textbox").value; 
        var releaseYear = document.getElementById("release-year").value;
        
        
        
        
        
        console.log(movieTitle);  
        console.log(genreSelected);
        console.log(releaseYear);
        console.log(ratingSelected);

        
        for (var i = 0; i < movieslength; i++) {
            
            if(movies[i] === movieTitle){
             $("#addPosters").append("<div class='poster-lg-container-mobile col-sm-6 col-md-3 col-lg-2 poster'><img src='" + + "'><div class='library-poster1'></div></div>"); 
                
                $(".library-poster1").find("img").attr("src", moviePosterIndivual);
                
                
            } else {
                console.log("movie not found");
            };       
        }
        
        
        for (var i = 0; i < movieslength; i++) {
            if(genres[i] === genreSelected){
                
            };    
        }      
        
        
        
    });
    
    
    
    
    
    
    
    
    /* -------------------- FILTER MOVIES / SERIES JS START ----------------------*/
	
	
	/*------------------ Testing data transfering from library to indiv --------------------------------------*/

	
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
				//console.log(moviesData);
				
				var movieName = moviesData.results[0].original_title;
				var movieOverview = moviesData.results[0].overview;
				var movieRating = moviesData.results[0].vote_average;
				var movieTagline = moviesData.results[0].tagline;
				var movieRuntime = moviesData.results[0].runtime;
				var movieGenre = moviesData.results[0].genre_ids;
				var movieIMDBid = moviesData.results[0].id;
				var moviePoster = 'https://image.tmdb.org/t/p/original' + moviesData.results[0].poster_path;
				
				//$("#addPosters").append("<div class='movie-poster col-xs-6 col-sm-6 col-md-3 col-lg-2'> <div class='clickable'><img class='moviePosterImgTag' data='"+ movieIMDBid +"'  src='" + moviePoster + "' ></div></div>"); 
				//console.log(movieName, movieGenre, movieIMDBid);
				
				$("#addPosters").append("<div class='movie-poster col-xs-6 col-sm-6 col-md-3 col-lg-2'><a href='indiv.html'><div class='poster-hover 5hover><div class ='poster-name 5name'>" + movieName + "</div><img class='library-poster' data='"+ movieIMDBid + "'  src='" + moviePoster + "' width='100%' height='72%'><div class ='poster-buttons'><div class='poster-button-info'><i class='fas fa-info'></i></div><div class='poster-button-play'>Play</div><div class='poster-button-list'><i class='fas fa-plus'></i></div></div></a></div> <!-- movie poster -->");
                
                /*<div class ="image-container 5poster"><img src="images/Django.jpg" width="100%" height="100%"/><div class="poster-hover 5hover"><div class ="poster-name 5name">Django Unchained</div><img src="images/Django.jpg" width="100%" height="72%"/><div class ="poster-buttons"><div class="poster-button-info"><i class="fas fa-info"></i></div><div class="poster-button-play">Play</div><div class="poster-button-list"><i class="fas fa-plus"></i></div></div></div></div>*/
			}; 
			
			
			
			
		};
    
    
    /*---------------- POSTERS HOVER START ----------------*/
    
    $(".library-poster").on("mouseenter", function(){
        console.log("test");
    });
    /*$(".library-poster").hover(function(){
        console.log("test");
        $(this).find(".poster-name").slideDown();
        $(this).find(".poster-buttons").fadeIn(500);
        $(this).find("img").css({filter:"grayscale(100%)", opacity:"0.5", transition:"0.5s ease"})
    },function(){
        $(this).find(".poster-name").slideUp();
        $(this).find(".poster-buttons").fadeOut(400);
        $(this).find("img").css({filter:"grayscale(0%)", opacity:"1"})
    });*/
        
   
    
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
            console.log("add");
            $(this).addClass("filter-active");
            $(".library-genre-mobile").slideDown(600);
        }
    });
    
    $(".library-filter-desktop").on("click",function(){
        if($(this).hasClass("filter-active")){
            $(this).removeClass("filter-active");
            $(".library-genre-mobile").slideUp(600);
        }else{
            console.log("add");
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



	

	
