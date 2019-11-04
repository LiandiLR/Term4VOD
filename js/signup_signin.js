$(document).ready(function(){
    
  $(".sign-in-next-btn-desk").click(function(){
    $("#sign-in-section").hide();
  });
  $(".sign-in-next-btn-desk").click(function(){
    $("#sign-up-section").show();
  });
    
  $(".sign-in-next-btn-tab").click(function(){
    $("#sign-in-section").hide();
  });
  $(".sign-in-next-btn-tab").click(function(){
    $("#sign-up-section").show();
  });
    
  $(".sign-in-next-btn").click(function(){
    $("#sign-in-section").hide();
  });
  $(".sign-in-next-btn").click(function(){
    $("#sign-up-section").show();
  });
    
    
    
  $(".sign-up-next-btn-desk").click(function(){
    $("#sign-up-section").hide();
  });
  $(".sign-up-next-btn-desk").click(function(){
    $("#sign-in-section").show();
  });
    
  $(".sign-up-next-btn-tab").click(function(){
    $("#sign-up-section").hide();
  });
  $(".sign-up-next-btn-tab").click(function(){
    $("#sign-in-section").show();
  });
    
  $(".sign-up-next-btn").click(function(){
    $("#sign-up-section").hide();
  });
  $(".sign-up-next-btn").click(function(){
    $("#sign-in-section").show();
  });

 
    $(".password-hide-icon").bind("click", function() {
        var test = $(".password-hide-icon").find("i").hasClass("fa-eye-slash");
        
        if(test === true){
            $(".password-hide-icon").find("i").removeClass('fa-eye-slash');
            $(".password-hide-icon").find("i").addClass('fa-eye');
        }else{
            $(".password-hide-icon").find("i").removeClass('fa-eye');
            $(".password-hide-icon").find("i").addClass('fa-eye-slash');
        }
        
        if ($('.password-text').attr('type') =='password'){
            $('.password-text').attr('type','text');
        }else if($('.password-text').attr('type') =='text'){
            $('.password-text').attr('type','password');
        }
    })   
    

    
    $(".password-hide-icon-tab").bind("click", function() {
        var test = $(".password-hide-icon-tab").find("i").hasClass("fa-eye-slash");
        
        if(test === true){
            $(".password-hide-icon-tab").find("i").removeClass('fa-eye-slash');
            $(".password-hide-icon-tab").find("i").addClass('fa-eye');
        }else{
            $(".password-hide-icon-tab").find("i").removeClass('fa-eye');
            $(".password-hide-icon-tab").find("i").addClass('fa-eye-slash');
        }
        
        if ($('.password-text-tab').attr('type') =='password'){
            $('.password-text-tab').attr('type','text');
        }else if($('.password-text-tab').attr('type') =='text'){
            $('.password-text-tab').attr('type','password');
        }
    })    

    
    $(".password-hide-icon-desk").bind("click", function() {
        var test = $(".password-hide-icon-desk").find("i").hasClass("fa-eye-slash");
        
        if(test === true){
            $(".password-hide-icon-desk").find("i").removeClass('fa-eye-slash');
            $(".password-hide-icon-desk").find("i").addClass('fa-eye');
        }else{
            $(".password-hide-icon-desk").find("i").removeClass('fa-eye');
            $(".password-hide-icon-desk").find("i").addClass('fa-eye-slash');
        }
        
        if ($('.password-text-desk').attr('type') =='password'){
            $('.password-text-desk').attr('type','text');
        }else if($('.password-text-desk').attr('type') =='text'){
            $('.password-text-desk').attr('type','password');
        }
    })
    
 
    
    
    // Store
        $(".password-hide-icon-desk").bind("click", function() {
        var test = $(".password-hide-icon-desk").find("i").hasClass("fa-eye-slash");
        
        if(test === true){
            $(".password-hide-icon-desk").find("i").removeClass('fa-eye-slash');
            $(".password-hide-icon-desk").find("i").addClass('fa-eye');
        }else{
            $(".password-hide-icon-desk").find("i").removeClass('fa-eye');
            $(".password-hide-icon-desk").find("i").addClass('fa-eye-slash');
        }
        
        if ($('.password-text-desk').attr('type') =='password'){
            $('.password-text-desk').attr('type','text');
        }else if($('.password-text-desk').attr('type') =='text'){
            $('.password-text-desk').attr('type','password');
        }
    })
    
    
    
    
    
    
    $('.sign-in-btn-desk').on("click", function(){  
        
    var userEmail = document.getElementById("email-text-desk").value;   
    console.log(userEmail);
            
    var userPassword = document.getElementById("password-text-desk").value;   
    console.log(userPassword); 
        
        for (var i=0; i < threeUsers.length; i++){
            if ((userEmail === threeUsers[i].userName) && (userPassword === threeUsers[i].userPassword)){
                var userImage = threeUsers[i].image
                localStorage.setItem('username',userEmail);
                localStorage.setItem('userimage',userImage);
                console.log("user valid");
                window.location.href = "pages/landing.html";
            } else {
                console.log("not valid");
            }   
        };    

   
    }); 
    
    
    
    
    $('.sign-in-btn').on("click", function(){  
        
    var userEmail = document.getElementById("email-text").value;   
    console.log(userEmail);
            
    var userPassword = document.getElementById("password-text").value;   
    console.log(userPassword);    
        
        for (var i=0; i < threeUsers.length; i++){
            if ((userEmail === threeUsers[i].userName) && (userPassword === threeUsers[i].userPassword)){
                localStorage.setItem('username',userEmail);
                console.log("user valid");
                window.location.href = "pages/landing.html";
            } else {
                console.log("not valid");
            }   
        };    

   
    }); 
    
    
    
    
    $('.sign-in-btn-tab').on("click", function(){  
        
    var userEmail = document.getElementById("email-text-tab").value;   
    console.log(userEmail);
            
    var userPassword = document.getElementById("password-text-tab").value;   
    console.log(userPassword);    
        
        for (var i=0; i < threeUsers.length; i++){
            if ((userEmail === threeUsers[i].userName) && (userPassword === threeUsers[i].userPassword)){
                localStorage.setItem('username',userEmail);
                console.log("user valid");
                window.location.href = "pages/landing.html";
            } else {
                console.log("not valid");
            }   
        };    

   
    }); 
        

    
});

    
    






























