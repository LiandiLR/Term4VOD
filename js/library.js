$(function() {
    
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
    
    for(i=0; i < 24 ; i++){
        //$('#AddHerePC').append("<div class='item col-xs-2'><img src="+  +"></div>");
        
        var movieslength = movies.length;
        var randomNumberMovie = Math.floor((Math.random() * movieslength));
        var randomMovieName = movies[randomNumberMovie];
        
        var movieAPIsearch = "http://www.omdbapi.com/?apikey=c0e1ea77&plot=full&t=" + randomMovieName;
        fetch(movieAPIsearch).then(res => res.json()).then((out) => {console.log(out);}).catch(err => console.error(err));
        
       $("#addPosters").append("<div class='poster-lg-container-mobile col-sm-6 col-md-3 col-lg-2'><img src='" + movieAPIsearch.Poster + "'></div>");
        
    };
    
    for(i=0; i < 24 ; i++){
        //$('#AddHerePC').append("<div class='item col-xs-2'><img src="+  +"></div>");
        
        var serieslength = series.length;
        var randomNumberSeries = Math.floor((Math.random() * serieslength));
        var randomSeriesName = series[randomNumberSeries];
        
        var seriesAPIsearch = "http://www.omdbapi.com/?apikey=c0e1ea77&plot=full&t=" + randomSeriesName;
        fetch(seriesAPIsearch).then(res => res.json()).then((out) => {console.log('Output: ', out);}).catch(err => console.error(err));
        
    };
    
    
    
    
});