
//nav sticks after vh
$(document).ready(function() {
  
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        var Firsth = document.getElementById("header");
        console.log(Firsth.clientHeight);
        // var divH = Firsth.height();
        console.log($(window).scrollTop())
      if ($(window).scrollTop() > Firsth.clientHeight) {
        $('#nav_bar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < Firsth.clientHeight) {
        $('#nav_bar').removeClass('navbar-fixed');
      }
    });
  });

  // Lettering Headera Animation
  $(document).ready(function() {
    $(".title").lettering();
  
  });
  
  $(document).ready(function() {
    animation();
  }, 100);
  function animation() {
    var title1 = new TimelineMax();
    title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
    title1.staggerFromTo(".title span", 0.5, 
    {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
    title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
  }

  // Page Navigation

  jQuery(document).ready(function($){
  
    // First try to add active class based on Scroll
      var top1 = $('#header').offset().top;
      var top2 = $('#About').offset().top;
      var top3 = $('#Project').offset().top;
      var top4 = $('#Contact').offset().top;
    
     
      $(document).scroll(function() {
          
            if ($(document).scrollTop() >= top1 && $(document).scrollTop() < top2)  {
            $('.blueActive').removeClass('blueActive');
            $('.scroll-fixed a').css('background-color', 'transparent');
            $('.scroll-fixed li:first a').addClass('active');
              $('.scroll-fixed a:last').removeClass('active');  
            } else if ($(document).scrollTop() >= top2 && $(document).scrollTop() < top3) {
             $('.scroll-fixed li:nth-child(3) a').css('background-color', 'transparent');
                $('.scroll-fixed a').removeClass('active');
                $('.scroll-fixed li:nth-child(2) a').addClass('blueActive');
                $('.scroll-fixed a:first').css('background-color', '#d3d3d3');
                
            } else if ($(document).scrollTop() >= top3 && $(document).scrollTop() < top4) {
             $('.scroll-fixed li:nth-child(4) a').css('background-color', 'transparent');
              $('.scroll-fixed a').removeClass('blueActive');
                $('.scroll-fixed li:nth-child(3) a').addClass('active');
                $('.scroll-fixed li:nth-child(2) a').css('background-color', '#d3d3d3');
            } else if ($(document).scrollTop() >= top4){
             $('.scroll-fixed a').removeClass('active');
              $('.scroll-fixed a').removeClass('blueActive');
                $('.scroll-fixed li:nth-child(4) a').addClass('blueActive');
                $('.scroll-fixed li:nth-child(3) a').css('background-color', '#d3d3d3');
            }
            
      });
    
    // Add Active class based on Click
      $('li a').click(function(e) {
  
          var target = $(this).attr('href');
          var strip = target.slice(1);
          var anchor = $("div[id='" + strip + "']");
          
          e.preventDefault();
          
          
          $(".active").removeClass("active");
          $('.blueActive').removeClass('blueActive');
          //$(this).addClass("active");
   
          $('html, body').animate({
  
              scrollTop: anchor.offset().top
  
          }, '6000');
  
      }); 
       
  });

  //
 
  //press down button
  $(document).ready("keydown", function(e) {   
  var code = e.which;
// e.which is used to set the keycode
// e.which = 38; // it is up
// e.which = 40; // it is down

 if(code == 40){
  $("body").css("background-color", "red");
   e.preventDefault();
   //
  console.log(code);
   
 } else if (code == 38) {
   e.preventDefault();    
   // up here
 
   
}
});