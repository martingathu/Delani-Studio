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
    
     $(".img_wrap").hover(function () {
      $(this).find("div").toggleClass("img_description_show");
    });
    
    $("#submit").click(function () {
      event.preventDefault()
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();

      if (name == '' || email == '' || message == '') {
        $("#post").html("Please fill all fields");
        $(".post").css('background-color', 'red')
      } else {
        $("#post").html(name + " we have received your message. Thank you for reaching out to us")
        $(".post").css('background-color', 'green')
        $("form")[0].reset();
      }
    });
});
