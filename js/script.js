$(document).ready(function(){
    $("#design").click(function(){
        $("#design-p").toggle();
    });
    $("#dev").click(function(){
        $("#dev-p").toggle();
    });
    $("#product").click(function(){
        $("#product-p").toggle();
     });

    $("#submit").click(function(){      
      var name = $("#names").val();
      var email = $("#email").val();
      var message = $("#message").val();

        if (name == '' || email == '' || message == ''){
          $("#post").text("Please fill all fields");
          $(".post").css('background-color', 'red')
        } else {
          $("#post").text(name + " we have received your message. Thank you for reaching out to us");
          $(".post").css('background-color', 'black')
          $("form")[0].reset();
          
        }
        event.preventDefault();
      });
   
});
