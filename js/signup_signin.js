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

    if ($('.password-text').attr('type') =='password'){
    $('.password-text').attr('type','text');
    $('.far fa-eye-slash').removeClass('far fa-eye-slash');
    $('.far fa-eye-slash').addClass('far fa-eye');
    }else if($('.password-text').attr('type') =='text'){
    $('.password-text').attr('type','password');
    $('.far fa-eye').removeClass('far fa-eye');
    $('.far fa-eye').addClass('far fa-eye-slash');
    }
    })   
    
    
    $(".password-hide-icon-tab").bind("click", function() {

    if ($('.password-text-tab').attr('type') =='password'){
    $('.password-text-tab').attr('type','text');
    $('.far fa-eye-slash').removeClass('far fa-eye-slash');
    $('.far fa-eye-slash').addClass('far fa-eye');
    }else if($('.password-text-tab').attr('type') =='text'){
    $('.password-text-tab').attr('type','password');
    $('.far fa-eye').removeClass('far fa-eye');
    $('.far fa-eye').addClass('far fa-eye-slash');
    }
    })  
    
    
    $(".password-hide-icon-desk").bind("click", function() {

    if ($('.password-text-desk').attr('type') =='password'){
    $('.password-text-desk').attr('type','text');
    $('.far fa-eye-slash').removeClass('far fa-eye-slash');
    $('.far fa-eye-slash').addClass('far fa-eye');
    }else if($('.password-text-desk').attr('type') =='text'){
    $('.password-text-desk').attr('type','password');
    $('.far fa-eye').removeClass('far fa-eye');
    $('.far fa-eye').addClass('far fa-eye-slash');
    }
    }) 
 
    
});





























