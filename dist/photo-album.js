$(document).ready(function () {
  

$(".photoStyling").click(function (e) {
    
    var target = $(this);
    var targetName = target.attr("href");
    
    $(".photoStyling").hide();
    $(targetName).show();
    $("navbar-container").show();
    $(".individual-kittens").show();

  });


  $(".navbar-container").on("click", function(e) {

  $(".albums [id^=album]").hide();
 
  $($(this).attr("href")).show();
});
    
});




