$(function(){
var apiRequest = new XMLHttpRequest();
    
    
    apiRequest.send('GET', 'http://www.omdbapi.com/?apikey=c0e1ea77', true);
    
    apiRequest.onload = function(){
        var data = JSON.parse(this.response);
        
    }
        
        
        
});