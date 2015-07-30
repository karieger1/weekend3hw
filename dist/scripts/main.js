$(document).ready(function () {
  
    // $(".navbar-container").function(e) 

     $("#album-contents").hide();
   
      $($(this).attr("href")).show();

  $(".photoStyling").click(function (e) {
    
    //var target = $(this);
    //var targetName = target.attr("href");
    
      $("navbar-container").show();
      $(".photoStyling").hide();
      // $(targetName).show();
      $("individual-kittens").show();
      // $('[id^=album].show();
   



  });




    
});




