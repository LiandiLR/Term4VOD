$(function() {
    
    console.log("Hello");
  
    var movieslength = movies.length;
    var randomNumberMovie = Math.floor((Math.random() * movieslength));
    var randomMovieName = movies[randomNumberMovie];
    
    var serieslength = series.length;
    var randomNumberSeries = Math.floor((Math.random() * serieslength));
    var randomSeriesName = series[randomNumberSeries];
    
    console.log(movieslength);
    console.log(randomNumberMovie);
    console.log(randomMovieName);
    
    console.log(serieslength);
    console.log(randomNumberSeries);
    console.log(randomSeriesName);
    
    
    for(i=0; i < movieslength; i++){
        $('#AddHerePC').append("<div class='item col-xs-2'><img src="+  +"></div>");        
    };
    
    var movieAPIsearch = "http://www.omdbapi.com/?apikey=c0e1ea77&plot=full&t=" + randomMovieName;
    
    fetch(movieAPIsearch).then(res => res.json()).then((out) => {console.log('Output: ', out);}).catch(err => console.error(err));
    
    var seriesAPIsearch = "http://www.omdbapi.com/?apikey=c0e1ea77&plot=full&t=" + randomSeriesName;
    
    fetch(seriesAPIsearch).then(res => res.json()).then((out) => {console.log('Output: ', out);}).catch(err => console.error(err));
});