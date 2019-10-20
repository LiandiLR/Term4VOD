$(function(){
    var apiRequest = new XMLHttpRequest();
    
    var apiCall = 'http://www.omdbapi.com/?apikey=6772d77&';
    
    $.getJSON(apiCall, dataCallBack);
    
    function dataCallBack(moviesData){
        console.log(moviesData);
    }
    
    apiRequest.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=c0e1ea77', true);
    
    apiRequest.send();
    
    apiRequest.onload = function(){
        var data = JSON.parse(this.response);
        
    }
        
        
        
});