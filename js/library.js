$(function(){
    
    console.log('helloooooo');
    
    var apiCall = 'https://api.themoviedb.org/3/movie/76341?api_key=9b788b49ee42354dbc57b8a25b87c9df';
    
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
        
        console.log(movieBudget, movieName, movieGenre, movieOverview, movieRating, movieReleaseDate, movieRuntime, movieTagline);
    };   
    
        
        
        
});