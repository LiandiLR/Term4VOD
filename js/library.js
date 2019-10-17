$(function(){
    
    console.log('hello');
    
    var apiRequest = new XMLHttpRequest();
    
    
    apiRequest.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=c0e1ea77', true);
    
    apiRequest.send();
    
    apiRequest.onload = function(){
        var data = JSON.parse(this.response);
        
    }
        
        
        
});