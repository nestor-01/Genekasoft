/********************************** 
   Author: Symbiotic-Themes
   Theme: Chappi (App Landingpage)
   Version: 1.0.1   
**********************************/

$(document).ready(function() {     
    

      // Sticky Navabr
      $("header").before($(".top-bar").clone().addClass("slidedown"));
      $(window).on("scroll", function () {
         $("body").toggleClass("slide-menu", ($(window).scrollTop() > 600));
      });
      
      
      //--------------------------------------------

      
      // One Page Navigation	   
	    $.scrollIt({	   
	      scrollTime: 1400,
	      easing: 'easeInOutExpo',
	      topOffset: -20,
	    });
      
      //-----------------------------------------------
      
      
      // Tooltip
      $('[data-toggle="tooltip"]').tooltip()
      
      
      //----------------------------------------------
      
      
      // Animation on Scroll
      var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false,       // trigger animations on mobile devices (default is true)
          live:         false        // act on asynchronously loaded content (default is true)
        }
      );
      wow.init();
      
      
      //----------------------------------------------
      
      
      // Parallax
      $.stellar({
         horizontalOffset: 0,
         verticalOffset: 0,
         responsive: false,
         horizontalScrolling: false,
      });     
      
      
      //----------------------------------------------
      
      
      // Mailchimp 
      $('#newsletter-form').ajaxChimp({
        callback: callbackFunction,
        url:'http://testtesttest.us9.list-manage2.com/subscribe/post?u=008a9a2d943991d29216928b5&id=058e093803'
      });

      function callbackFunction (resp) {
          console.log(resp);
          $("#mc-email").removeClass("error");
          if (resp.result === 'success') {
            $(".subscribe-message").html('<i class="fa fa-check"></i> We have sent you a confirmation email.').fadeIn().css("color","#29b94f");
          }
          else{
            var msg = resp.msg.split("-")[1];
            $(".subscribe-message").html('<i class="fa fa-warning"></i> You must enter a valid e-mail address.').fadeIn().css("color","#ef4b4b");
            $("#mc-email").addClass("error");
          }
      }     
      
      
      //---------------------------------------------
      
      
      // Particles
      /**$('#particlesSystem').particleground({
          dotColor: '#fff',
          lineColor: '#fff'
      });*/
      
      
      //----------------------------------------------
      
      
      // Mobile Navi Click
      $('nav a').on('click', function(){ 
       if($('.navbar-toggle').css('display') !='none'){
           $(".navbar-toggle").trigger( "click" );
       }
      });
      
      
      //----------------------------------------------
      
      
      // Scroll Up
      $('.scrollup, .logo a').click(function(){
          $("html, body").animate({ scrollTop: 0 }, 1200, 'easeInOutExpo');
          return false;
      });
      
      
      //----------------------------------------------      
      
      
      // Contact Form
      $("#contactform").submit(function(event) {
          
           $("#contactform").find(".input-field").removeClass("error");

           event.preventDefault();
           event.stopImmediatePropagation();

           var name = $("input#contactname").val();
           var email = $("input#contactemail").val();
           var message = $("textarea#contactmessage").val();

           if (name == "") {
               $(".contact-message").stop(true).html('<i class="fa fa-warning"></i> All fields are required.').css("color","#ef4b4b");
               $("input#contactname").focus().addClass("error");
           } else if( email == ""){
               $(".contact-message").stop(true).html('<i class="fa fa-warning"></i> All fields are required.').css("color","#ef4b4b");
               $("input#contactemail").focus().addClass("error");
           } else if (!isValidEmailAddress(email)) {
               $(".contact-message").stop(true).html('<i class="fa fa-warning"></i> E-mail address is not valid.').css("color","#ef4b4b");
               $("input#contactemail").focus().addClass("error");
           } else if( message == ""){
               $(".contact-message").stop(true).html('<i class="fa fa-warning"></i> All fields are required.').css("color","#ef4b4b");
               $("textarea#contactmessage").focus().addClass("error");
           } else {
               $.ajax({
                   type: "POST",
                   url: "contact/contact.php",
                   data: {
                       'contactEmailField': email,
                       'contactNameField': name,
                       'contactMessageTextarea': message
                   },
                   success: function() {
                       $(".contact-message").html('<i class="fa fa-check"></i> Thank you for your message!').css("color","#29b94f");
                       $('input#contactname').val('');
                       $('input#contactemail').val('');
                       $('textarea#contactmessage').val('');
                   }
               });
           }
      });

       
      
 
});

// E-mail validation
function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
  return pattern.test(emailAddress);
}; 
