$(function(){
var apiRequest = new XMLHttpRequest();
    
    
    apiRequest.open('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=H9ozsBDri8hFMbQguWbTVvJfnMjhIhLWZ16SxfFH', true);
    
    apiRequest.send();
    
    apiRequest.onload = function(){
        var data = JSON.parse(this.response);
        
    }
        
        
        
});