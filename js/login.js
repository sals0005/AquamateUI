$(".username-signup").hide();
$("#signup-box-link").click(function(){
  $(".username-login").fadeOut(100);
  $(".username-signup").delay(100).fadeIn(100);
  $("#login-box-link").removeClass("active");
  $("#signup-box-link").addClass("active");
  
});
$("#login-box-link").click(function(){
  $(".username-login").delay(100).fadeIn(100);;
  $(".username-signup").fadeOut(100);
  $("#login-box-link").addClass("active");
  $("#signup-box-link").removeClass("active");
});